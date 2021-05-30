import { GamingRural } from "../logic/mode"
import { useMemo } from "react"
import { loadRanking, Ranking } from "../logic/ranking"

export const RankingContent = ({ rural }: { rural: GamingRural }) => {
  const ranking = useMemo<Ranking>(() => {
    return (loadRanking(rural) ?? []).sort((a, b) => b.point - a.point)
  }, [rural])

  return (
    <>
      <p className={"title"}>ランキング</p>
      {ranking.map((rank, i) => {
        return <p>{`${i + 1}位 ${rank.point}点 ${rank.name}`}</p>
      })}
    </>
  )
}
