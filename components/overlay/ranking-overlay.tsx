import { GamingRural, Mode } from "../../logic/mode"
import { RankingContent } from "../ranking-content"
import { Overlay } from "./overlay"

export const RankingOverlay = ({
  rural,
  onChangeMode,
}: {
  rural: GamingRural
  onChangeMode: (mode: Mode) => void
}) => {
  return (
    <Overlay>
      <RankingContent rural={rural} />
      <button
        onClick={() => {
          onChangeMode(Mode.RankingSelect)
        }}
      >
        戻る
      </button>
      <button
        onClick={() => {
          onChangeMode(Mode.Title)
        }}
      >
        タイトルに戻る
      </button>
    </Overlay>
  )
}
