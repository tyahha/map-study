import { useCallback, useRef, useState } from "react"
import { japanArea, JapanArea, JapanAreaId } from "../data/japan-area"
import { playCorrectOrInCorrectSound } from "../data/se"
import { GamingRural, getQuestions, Mode } from "../logic/mode"
import { MapGame } from "../components/map-game"
import { AnswerState } from "../logic/answer-state"
import { TitleOverlay } from "../components/overlay/title-overlay"
import { RankingSelectOverlay } from "../components/overlay/ranking-select-overlay"
import { RankingOverlay } from "../components/overlay/ranking-overlay"
import { ResultOverlay } from "../components/overlay/result-overlay"

const timeLimit = 30 * 1000

export default function Index() {
  const [mode, setMode] = useState(Mode.Title)
  const [rural, setRural] = useState(GamingRural.All)
  const [point, setPoint] = useState(0)
  const [answerState, setAnswerState] = useState<undefined | AnswerState>()

  const questions = useRef<JapanArea[]>([])
  const getNextQuestion = (): JapanArea => {
    console.log("current", questions.current)
    if (questions.current.length <= 0) {
      console.log("refresh q")
      questions.current = getQuestions(rural)
    }
    const ret = questions.current[0]
    questions.current.shift()
    return ret
  }

  const [question, setCurrentQuestion] = useState<JapanArea | undefined>(undefined)
  const startGame = (rural: GamingRural) => {
    setAnswerState(undefined)
    setPoint(0)
    setMode(Mode.Gaming)
    setRural(rural)
    questions.current = getQuestions(rural)
    setCurrentQuestion(getNextQuestion())
  }

  const click = useCallback(
    (id: JapanAreaId) => {
      console.log(id)

      const isCorrect = id === question?.id

      playCorrectOrInCorrectSound(isCorrect)

      setPoint((p) => {
        return p + (isCorrect ? 100 : -50)
      })

      const answer = japanArea.get(id)
      if (!answer) {
        throw new Error(`unknown area id=${id}`)
      }

      setAnswerState((c) => {
        return {
          count: c ? c.count + 1 : 1,
          correct: isCorrect,
          answer,
        }
      })
      if (isCorrect) {
        setCurrentQuestion(getNextQuestion())
      }
    },
    [question],
  )

  const showRanking = (rural: GamingRural) => {
    setRural(rural)
    setMode(Mode.RankingView)
  }

  return (
    <div className={"game-window"}>
      {mode === Mode.Title && <TitleOverlay onStartGame={startGame} onChangeMode={setMode} />}
      {mode === Mode.RankingSelect && (
        <RankingSelectOverlay onSelectRanking={showRanking} onChangeMode={setMode} />
      )}
      {mode === Mode.RankingView && (
        <RankingOverlay
          rural={rural}
          onChangeMode={(mode) => {
            setMode(mode)
            setRural(GamingRural.All)
          }}
        />
      )}
      {mode === Mode.Result && (
        <ResultOverlay
          point={point}
          rural={rural}
          onRestart={() => {
            startGame(rural)
          }}
          onReturnTitle={() => {
            setMode(Mode.Title)
            setRural(GamingRural.All)
          }}
        />
      )}
      <MapGame
        mode={mode}
        point={point}
        rural={rural}
        timeLimit={timeLimit}
        question={question}
        answerState={answerState}
        onChangeMode={setMode}
        onChangeRural={setRural}
        onClickMap={click}
      />
    </div>
  )
}
