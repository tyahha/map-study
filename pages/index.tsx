import {JapanMap} from "../components/japan-map"
import {useCallback, useRef, useState} from "react"
import {japanMap, JapanPrefectureId} from "../data/japan-map"
import {getPrefectureQuestions} from "../logic/logic"
import {FadeOut} from "../components/fade-out"
import classNames from "classnames"
import {playCorrectOrInCorrectSound} from "../data/se"

export default function Index() {

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
    setAnswer(id)
    setPrevQuestion(question)
    setCurrentQuestion(getNextQuestion())
  }, [question])

  if (!prefecture) {
    throw new Error(`unknown prefecture id=${question}`)
  }

  return (
    <div className={"game-window"}>
      <div className={"map-container"}>
        <FadeOut time={500} show={!!answer}>
          <p className={classNames("correct-or-incorrect", {
            correct: prevQuestion === answer,
            incorrect: prevQuestion !== answer,
          })}>{prevQuestion === answer ? "○正解" : "×不正解"}</p>
        </FadeOut>
        <p className={"prefecture-question"}>{prefecture.name}</p>
        <JapanMap onClick={click}/>
      </div>
    </div>
  )
}
