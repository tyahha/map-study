import { GamingRural, gamingRuralText, Mode } from "../../logic/mode"
import { Overlay } from "./overlay"

export const RankingSelectOverlay = ({
  onSelectRanking,
  onChangeMode,
}: {
  onSelectRanking: (rural: GamingRural) => void
  onChangeMode: (mode: Mode) => void
}) => {
  return (
    <Overlay>
      <p className={"title"}>ランキング選択</p>
      <p>
        <button onClick={() => onSelectRanking(GamingRural.All)}>
          {gamingRuralText(GamingRural.All)}
        </button>
        <button onClick={() => onSelectRanking(GamingRural.Chiho)}>
          {gamingRuralText(GamingRural.Chiho)}
        </button>
      </p>
      <p>
        <button onClick={() => onSelectRanking(GamingRural.HokkaidoTohoku)}>
          {gamingRuralText(GamingRural.HokkaidoTohoku)}
        </button>
        <button onClick={() => onSelectRanking(GamingRural.Kanto)}>
          {gamingRuralText(GamingRural.Kanto)}
        </button>
        <button onClick={() => onSelectRanking(GamingRural.Chubu)}>
          {gamingRuralText(GamingRural.Chubu)}
        </button>
      </p>
      <p>
        <button onClick={() => onSelectRanking(GamingRural.Kinki)}>
          {gamingRuralText(GamingRural.Kinki)}
        </button>
        <button onClick={() => onSelectRanking(GamingRural.ChugokuShikoku)}>
          {gamingRuralText(GamingRural.ChugokuShikoku)}
        </button>
        <button onClick={() => onSelectRanking(GamingRural.Kyusyu)}>
          {gamingRuralText(GamingRural.Kyusyu)}
        </button>
      </p>{" "}
      <p>
        <button onClick={() => onChangeMode(Mode.Title)}>戻る</button>
      </p>
    </Overlay>
  )
}
