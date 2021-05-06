import { Mode } from "../logic/mode"
import { useState } from "react"
import { setRanking } from "../logic/ranking"

export const RankSaver = ({ mode, point }: { mode: Mode; point: number }) => {
  const [name, setName] = useState("")
  const [saved, setSaved] = useState(false)
  return saved ? (
    <p>ランキングを保存しました</p>
  ) : (
    <div>
      <p>
        名前を入力してください：
        <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <button
          onClick={() => {
            if (!name) {
              alert("名前を入力してください")
              return
            }
            setRanking(mode, point, name)
            setSaved(true)
          }}
        >
          保存する
        </button>
      </p>
    </div>
  )
}
