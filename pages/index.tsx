import {JapanMap} from "../components/japan-map"
import {useCallback, useRef, useState} from "react"
import {japanMap, JapanPrefectureId} from "../data/japan-map"
import {getPrefectureQuestions} from "../logic/logic"
import {FadeOut} from "../components/fade-out"
import classNames from "classnames"
import {playCorrectOrInCorrectSound} from "../data/se"
import {CountDownTimer} from "../components/count-down-timer"

export default function Index() {

  const [gaming, setGaming] = useState(false)
  const [end, setEnd] = useState(false)
  const [point, setPoint] = useState(0)

  const questions = useRef<JapanPrefectureId[]>(getPrefectureQuestions())
  const getNextQuestion = (): JapanPrefectureId => {
    if (questions.current.length <= 0) {
      questions.current = getPrefectureQuestions()
    }
    const ret = questions.current[0]
    questions.current.shift()
    return ret
  }

  const [question, setCurrentQuestion] = useState<JapanPrefectureId>(getNextQuestion())
  const [answer, setAnswer] = useState<JapanPrefectureId | undefined>(undefined)
  const [prevQuestion, setPrevQuestion] = useState<JapanPrefectureId | null>(null)
  const prefecture = japanMap.get(question)

  const click = useCallback((id: JapanPrefectureId) => {
    playCorrectOrInCorrectSound(id === question)

    setPoint((p) => {
      return p + (id === question ? 100 : -50)
    })

    setAnswer(id)
    setPrevQuestion(question)
    setCurrentQuestion(getNextQuestion())
  }, [question])

  if (!prefecture) {
    throw new Error(`unknown prefecture id=${question}`)
  }

  return (
    <div className={"game-window"}>
      {!gaming && !end && (
        <>
          <div className={"overlay"}/>
          <div className={"overlay-content"}>
            <p className={"title"}>都道府県当てゲーム</p>
            <button onClick={() => {
              setGaming(true)
            }}>開始
            </button>
          </div>
        </>
      )}
      {end && (
        <>
          <div className={"overlay"}/>
          <div className={"overlay-content"}>
            <p className={"title"}>今回の得点</p>
            <p className={"result-point"}>{`${point} 点`}</p>
            <button onClick={() => {
              setGaming(true)
              setEnd(false)
              setPoint(0)
            }}>もう１回遊ぶ
            </button>
          </div>
        </>
      )}
      <div className={"map-container"}>
        <FadeOut time={500} show={!!answer}>
          <p className={classNames("correct-or-incorrect", {
            correct: prevQuestion === answer,
            incorrect: prevQuestion !== answer,
          })}>{prevQuestion === answer ? "○正解" : "×不正解"}</p>
        </FadeOut>
        {gaming && !end &&
        <>
          <CountDownTimer time={30 * 1000} timeUp={() => {
            setEnd(true)
          }} />
          <p className={"point"}>{`点数：${point} 点`}</p>
          <p className={"prefecture-question"}>{prefecture.name}</p>
        </>
        }
        <JapanMap onClick={click}/>
      </div>
    </div>
  )
}
