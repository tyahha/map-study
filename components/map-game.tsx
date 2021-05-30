import { GamingRural, Mode } from "../logic/mode"
import { CountDownTimer } from "./count-down-timer"
import { FadeOut } from "./fade-out"
import classNames from "classnames"
import { JapanMap } from "./japan-map"
import { ChihoMap } from "./chiho-map"
import { HokkaidoTohokuMap } from "./hokkaido-tohoku-map"
import { KantoMap } from "./kanto-map"
import { ChubuMap } from "./chubu-map"
import { KinkiMap } from "./kinki-map"
import { ChugokuShikokuMap } from "./chugoku-shikoku-map"
import { KyusyuMap } from "./kyusyu-map"
import {JapanArea, JapanAreaId} from "../data/japan-area"
import { AnswerState } from "../logic/answer-state"

export const MapGame = ({
  mode,
  point,
  rural,
  timeLimit,
  question,
  answerState,
  onChangeMode,
  onChangeRural,
  onClickMap,
}: {
  mode: Mode
  point: number
  rural: GamingRural
  timeLimit: number
  question: undefined | JapanArea
  answerState: undefined | AnswerState
  onChangeMode: (mode: Mode) => void
  onChangeRural: (rural: GamingRural) => void
  onClickMap: (id: JapanAreaId) => void
}) => {
  const answer = answerState?.answer
  const isCorrect = answerState?.correct

  return (
    <div className={"map-container"}>
      {mode === Mode.Gaming && (
        <div className={"game-state"}>
          <CountDownTimer
            time={timeLimit}
            timeUp={() => {
              onChangeMode(Mode.Result)
            }}
          />
          <p className={"point"}>{`点数：${point} 点`}</p>
          <p className={"prefecture-question"}>問題：{question?.name}</p>
          <p>
            <button
              onClick={() => {
                onChangeMode(Mode.Title)
                onChangeRural(GamingRural.All)
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
      {rural === GamingRural.All && <JapanMap onClick={onClickMap} />}
      {rural === GamingRural.Chiho && <ChihoMap onClick={onClickMap} />}
      {rural === GamingRural.HokkaidoTohoku && <HokkaidoTohokuMap onClick={onClickMap} />}
      {rural === GamingRural.Kanto && <KantoMap onClick={onClickMap} />}
      {rural === GamingRural.Chubu && <ChubuMap onClick={onClickMap} />}
      {rural === GamingRural.Kinki && <KinkiMap onClick={onClickMap} />}
      {rural === GamingRural.ChugokuShikoku && <ChugokuShikokuMap onClick={onClickMap} />}
      {rural === GamingRural.Kyusyu && <KyusyuMap onClick={onClickMap} />}
    </div>
  )
}
