import {JapanMap} from "../components/japan-map"
import {useCallback, useRef, useState} from "react"
import {japanMap, JapanPrefectureId} from "../data/japan-map"
import {getPrefectureQuestions} from "../logic/logic"
import {FadeOut} from "../components/fade-out"
import classNames from "classnames"
import {playCorrectOrInCorrectSound} from "../data/se"

export default function Index() {

  const [gaming, setGaming] = useState(false)
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
  const [answer, setAnswer] = useState<JapanPrefectureId|undefined>(undefined)
  const [prevQuestion, setPrevQuestion] = useState<JapanPrefectureId|null>(null)
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
      {!gaming && (
        <>
        <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>都道府県当てゲーム</p>
            <button onClick={() => {
              setGaming(true)
            }}>開始</button>
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
        {gaming &&
        <>
          <p className={"point"}>{`点数：${point} 点`}</p>
        <p className={"prefecture-question"}>{prefecture.name}</p>
        </>
        }
        <JapanMap onClick={click}/>
      </div>
    </div>
  )
}
