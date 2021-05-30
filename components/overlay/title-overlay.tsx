import { GamingRural, gamingRuralText, Mode } from "../../logic/mode"
import { Overlay } from "./overlay"

export const TitleOverlay = ({
  onStartGame,
  onChangeMode,
}: {
  onStartGame: (rural: GamingRural) => void
  onChangeMode: (mode: Mode) => void
}) => {
  return (
    <Overlay>
      <p className={"title"}>日本地図ゲーム</p>
      <p>
        <button onClick={() => onStartGame(GamingRural.All)}>
          {gamingRuralText(GamingRural.All)}
        </button>
        <button onClick={() => onStartGame(GamingRural.Chiho)}>
          {gamingRuralText(GamingRural.Chiho)}
        </button>
      </p>
      <p>
        <button onClick={() => onStartGame(GamingRural.HokkaidoTohoku)}>
          {gamingRuralText(GamingRural.HokkaidoTohoku)}
        </button>
        <button onClick={() => onStartGame(GamingRural.Kanto)}>
          {gamingRuralText(GamingRural.Kanto)}
        </button>
        <button onClick={() => onStartGame(GamingRural.Chubu)}>
          {gamingRuralText(GamingRural.Chubu)}
        </button>
      </p>
      <p>
        <button onClick={() => onStartGame(GamingRural.Kinki)}>
          {gamingRuralText(GamingRural.Kinki)}
        </button>
        <button onClick={() => onStartGame(GamingRural.ChugokuShikoku)}>
          {gamingRuralText(GamingRural.ChugokuShikoku)}
        </button>
        <button onClick={() => onStartGame(GamingRural.Kyusyu)}>
          {gamingRuralText(GamingRural.Kyusyu)}
        </button>
      </p>
      <p>
        <button onClick={() => onChangeMode(Mode.RankingSelect)}>ランキング見る</button>
      </p>
    </Overlay>
  )
}
