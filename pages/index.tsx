import {useCallback, useRef, useState} from "react"
import {japanArea, JapanArea, JapanAreaId} from "../data/japan-area"
import {FadeOut} from "../components/fade-out"
import classNames from "classnames"
import {playCorrectOrInCorrectSound} from "../data/se"
import {CountDownTimer} from "../components/count-down-timer"
import {GamingRural, gamingRuralText, getQuestions, Mode} from "../logic/mode"
import {ChihoMap} from "../components/chiho-map"
import {HokkaidoTohokuMap} from "../components/hokkaido-tohoku-map"
import {KantoMap} from "../components/kanto-map"
import {ChubuMap} from "../components/chubu-map"
import {KinkiMap} from "../components/kinki-map"
import {ChugokuShikokuMap} from "../components/chugoku-shikoku-map"
import {KyusyuMap} from "../components/kyusyu-map"
import {isRankIn} from "../logic/ranking"
import {RankSaver} from "../components/rank-saver"
import {JapanMap} from "../components/japan-map"
import {RankingContent} from "../components/ranking-content"

const timeLimit = 3 * 1000

export default function Index() {
  const [mode, setMode] = useState(Mode.Title)
  const [rural, setRural] = useState(GamingRural.All)
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
      {mode === Mode.Title && (
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>日本地図ゲーム</p>
            <p>
              <button onClick={() => startGame(GamingRural.All)}>
                {gamingRuralText(GamingRural.All)}
              </button>
              <button onClick={() => startGame(GamingRural.Chiho)}>
                {gamingRuralText(GamingRural.Chiho)}
              </button>
            </p>
            <p>
              <button onClick={() => startGame(GamingRural.HokkaidoTohoku)}>
                {gamingRuralText(GamingRural.HokkaidoTohoku)}
              </button>
              <button onClick={() => startGame(GamingRural.Kanto)}>
                {gamingRuralText(GamingRural.Kanto)}
              </button>
              <button onClick={() => startGame(GamingRural.Chubu)}>
                {gamingRuralText(GamingRural.Chubu)}
              </button>
            </p>
            <p>
              <button onClick={() => startGame(GamingRural.Kinki)}>
                {gamingRuralText(GamingRural.Kinki)}
              </button>
              <button onClick={() => startGame(GamingRural.ChugokuShikoku)}>
                {gamingRuralText(GamingRural.ChugokuShikoku)}
              </button>
              <button onClick={() => startGame(GamingRural.Kyusyu)}>
                {gamingRuralText(GamingRural.Kyusyu)}
              </button>
            </p>
            <p>
              <button onClick={() => setMode(Mode.RankingSelect)}>ランキング見る</button>
            </p>
          </div>
        </>
      )}
      {mode === Mode.RankingSelect && (
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>ランキング選択</p>
            <p>
              <button onClick={() => showRanking(GamingRural.All)}>
                {gamingRuralText(GamingRural.All)}
              </button>
              <button onClick={() => showRanking(GamingRural.Chiho)}>
                {gamingRuralText(GamingRural.Chiho)}
              </button>
            </p>
            <p>
              <button onClick={() => showRanking(GamingRural.HokkaidoTohoku)}>
                {gamingRuralText(GamingRural.HokkaidoTohoku)}
              </button>
              <button onClick={() => showRanking(GamingRural.Kanto)}>
                {gamingRuralText(GamingRural.Kanto)}
              </button>
              <button onClick={() => showRanking(GamingRural.Chubu)}>
                {gamingRuralText(GamingRural.Chubu)}
              </button>
            </p>
            <p>
              <button onClick={() => showRanking(GamingRural.Kinki)}>
                {gamingRuralText(GamingRural.Kinki)}
              </button>
              <button onClick={() => showRanking(GamingRural.ChugokuShikoku)}>
                {gamingRuralText(GamingRural.ChugokuShikoku)}
              </button>
              <button onClick={() => showRanking(GamingRural.Kyusyu)}>
                {gamingRuralText(GamingRural.Kyusyu)}
              </button>
            </p>            <p>
              <button onClick={() => setMode(Mode.Title)}>戻る</button>
            </p>
          </div>
        </>
      )}
      { mode === Mode.RankingView &&
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <RankingContent rural={rural} />
            <button onClick={() => {
              setMode(Mode.RankingSelect)
              setRural(GamingRural.All)
            }}>戻る</button>
            <button onClick={() => {
              setMode(Mode.Title)
              setRural(GamingRural.All)
            }}>タイトルに戻る</button>
          </div>
        </>
      }
      {mode === Mode.Result && (
        <>
          <div className={"overlay"} />
          <div className={"overlay-content"}>
            <p className={"title"}>今回の得点</p>
            <p className={"result-point"}>{`${point} 点`}</p>
            <p className={"title"}>{isRankIn(rural, point) ? "ランクイン" : "ランク外"}</p>
            {isRankIn(rural, point) && <RankSaver rural={rural} point={point} />}
            <button
              onClick={() => {
                startGame(rural)
              }}
            >
              もう１回遊ぶ
            </button>
            <button
              onClick={() => {
                setMode(Mode.Title)
                setRural(GamingRural.All)
              }}
            >
              タイトルに戻る
            </button>
          </div>
        </>
      )}
      <div className={"map-container"}>
        {mode === Mode.Gaming && (
          <div className={"game-state"}>
            <CountDownTimer
              time={timeLimit}
              timeUp={() => {
                setMode(Mode.Result)
              }}
            />
            <p className={"point"}>{`点数：${point} 点`}</p>
            <p className={"prefecture-question"}>問題：{question?.name}</p>
            <p>
              <button
                onClick={() => {
                  setMode(Mode.Title)
                  setRural(GamingRural.All)
                }}
              >
                中止
              </button>
              {answerState && (
                <FadeOut time={500} show={!!answer}>
                <span
                  className={classNames("correct-or-incorrect", {
                    correct: isCorrect === true,
                    incorrect: isCorrect === false,
                  })}
                >
                  {isCorrect ? "○" : "×"}
                  {answer ? answer.name : ""}
                </span>
                  <span style={{ display: "none" }}>{answerState?.count}</span>
                </FadeOut>
              )}
            </p>
          </div>
        )}
        {rural === GamingRural.All && <JapanMap onClick={click} />}
        {rural === GamingRural.Chiho && <ChihoMap onClick={click} />}
        {rural === GamingRural.HokkaidoTohoku && <HokkaidoTohokuMap onClick={click} />}
        {rural === GamingRural.Kanto && <KantoMap onClick={click} />}
        {rural === GamingRural.Chubu && <ChubuMap onClick={click} />}
        {rural === GamingRural.Kinki && <KinkiMap onClick={click} />}
        {rural === GamingRural.ChugokuShikoku && <ChugokuShikokuMap onClick={click} />}
        {rural === GamingRural.Kyusyu && <KyusyuMap onClick={click} />}
      </div>
    </div>
  )
}
