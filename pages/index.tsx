import { JapanMap } from "../components/japan-map"
import { useCallback, useRef, useState } from "react"
import { japanArea, JapanArea, JapanAreaId } from "../data/japan-area"
import { FadeOut } from "../components/fade-out"
import classNames from "classnames"
import { playCorrectOrInCorrectSound } from "../data/se"
import { CountDownTimer } from "../components/count-down-timer"
import { getModeQuestions, Mode } from "../logic/mode"
import { ChihoMap } from "../components/chiho-map"
import {HokkaidoTohokuMap} from "../components/hokkaido-tohoku-map"
import {KantoMap} from "../components/kanto-map"
import {ChubuMap} from "../components/chubu-map"
import {KinkiMap} from "../components/kinki-map"
import {ChugokuShikokuMap} from "../components/chugoku-shikoku-map"
import {KyusyuMap} from "../components/kyusyu-map"

const timeLimit = 3 * 1000

export default function Index() {
  const [mode, setMode] = useState(Mode.Title)
  const [prevGameMode, setPrevGameMode] = useState(Mode.All)
  const [point, setPoint] = useState(0)
  const [answerState, setAnswerState] = useState<
    undefined | { count: number; correct: boolean; answer: JapanArea }
  >()
  const answer = answerState?.answer
  const isCorrect = answerState?.correct

  const questions = useRef<JapanArea[]>([])
  const getNextQuestion = (): JapanArea => {
    console.log("current", questions.current)
    if (questions.current.length <= 0) {
      console.log("refresh q")
      questions.current = getModeQuestions(mode)
    }
    const ret = questions.current[0]
    questions.current.shift()
    return ret
  }

  const [question, setCurrentQuestion] = useState<JapanArea | undefined>(undefined)
  const isGaming = mode !== Mode.Title && mode !== Mode.Result

  const startGame = (mode: Mode) => {
    setAnswerState(undefined)
    setPoint(0)
    setMode(mode)
    questions.current = getModeQuestions(mode)
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
        throw  new Error(`unknown area id=${id}`)
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

  return (
    <div className={"game-window"}>
      {mode === Mode.Title && (
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>日本地図ゲーム</p>
            <p>
              <button onClick={() => startGame(Mode.All)}>全国都道府県</button>
              <button onClick={() => startGame(Mode.Chiho)}>地方</button>
            </p>
            <p>
              <button onClick={() => startGame(Mode.HokkaidoTohoku)}>
                東北地方
              </button>
              <button onClick={() => startGame(Mode.Kanto)}>
                関東地方
              </button>
              <button onClick={() => startGame(Mode.Chubu)}>
                中部地方
              </button>
            </p>
            <p>
              <button onClick={() => startGame(Mode.Kinki)}>
                近畿地方
              </button>
              <button onClick={() => startGame(Mode.ChugokuShikoku)}>
                中国・四国地方
              </button>
              <button onClick={() => startGame(Mode.Kyusyu)}>
                九州地方
              </button>
            </p>
          </div>
        </>
      )}
      {mode === Mode.Result && (
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>今回の得点</p>
            <p className={"result-point"}>{`${point} 点`}</p>
            <button
              onClick={() => {
                startGame(prevGameMode)
              }}
            >
              もう１回遊ぶ
            </button>
            <button
              onClick={() => {
                setMode(Mode.Title)
              }}
            >
              タイトルに戻る
            </button>
          </div>
        </>
      )}
      <div className={"map-container"}>
        {isGaming && (
          <div className={"game-state"}>
            <p>
              <button onClick={() => setMode(Mode.Title)}>中止</button>
            </p>
            <CountDownTimer
              time={timeLimit}
              timeUp={() => {
                setPrevGameMode(mode)
                setMode(Mode.Result)
              }}
            />
            <p className={"point"}>{`点数：${point} 点`}</p>
            <p className={"prefecture-question"}>問題：{question?.name}</p>
            {answerState && (
              <FadeOut time={500} show={!!answer}>
                <p
                  className={classNames("correct-or-incorrect", {
                    correct: isCorrect === true,
                    incorrect: isCorrect === false,
                  })}
                >
                  {isCorrect ? "○" : "×"}
                  {answer ? answer.name : ""}
                </p>
                <span style={{ display: "none" }}>{answerState?.count}</span>
              </FadeOut>
            )}
          </div>
        )}
        {(mode === Mode.Title ||
          mode === Mode.All ||
          (mode === Mode.Result && prevGameMode === Mode.All)) && <JapanMap onClick={click} />}
        {(mode === Mode.Chiho || (mode === Mode.Result && prevGameMode === Mode.Chiho)) && (
          <ChihoMap onClick={click} />
        )}
        {(mode === Mode.HokkaidoTohoku || (mode === Mode.Result && prevGameMode === Mode.HokkaidoTohoku)) && (
          <HokkaidoTohokuMap onClick={click} />
        )}
        {(mode === Mode.Kanto || (mode === Mode.Result && prevGameMode === Mode.Kanto)) && (
          <KantoMap onClick={click} />
        )}
        {(mode === Mode.Chubu || (mode === Mode.Result && prevGameMode === Mode.Chubu)) && (
          <ChubuMap onClick={click} />
        )}
        {(mode === Mode.Kinki || (mode === Mode.Result && prevGameMode === Mode.Kinki)) && (
          <KinkiMap onClick={click} />
        )}
        {(mode === Mode.ChugokuShikoku || (mode === Mode.Result && prevGameMode === Mode.ChugokuShikoku)) && (
          <ChugokuShikokuMap onClick={click} />
        )}
        {(mode === Mode.Kyusyu || (mode === Mode.Result && prevGameMode === Mode.Kyusyu)) && (
          <KyusyuMap onClick={click} />
        )}
      </div>
    </div>
  )
}
