import { Mode } from "./mode"

export interface Rank {
  name: string
  point: number
}

type Ranking = Rank[]

const KeyPrefix = "MAP_STUDY_RANKING_"

const getKey = (mode: Mode): string => `${KeyPrefix}_${mode}`

export const saveRanking = (mode: Mode, ranking: Ranking): void => {
  localStorage.setItem(getKey(mode), JSON.stringify(ranking))
}

export const loadRanking = (mode: Mode): Ranking | null => {
  const s = localStorage.getItem(getKey(mode))
  if (s) {
    const a = JSON.parse(s)
    if (Array.isArray(a)) {
      return a
    }
    return null
  }
  return null
}

export const isRankIn = (mode: Mode, point: number): boolean => {
  const ranking = loadRanking(mode)
  if (!ranking) return true

  for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].point < point) {
      return true
    }
  }
  return false
}

export const setRanking = (mode: Mode, point: number, name: string): void => {
  let ranking = loadRanking(mode)
  const newRank = {
    point,
    name,
  }
  if (!ranking) {
    ranking = [newRank]
  } else {
    const newRanking: Ranking = []
    let i = 0
    let pushNew = false
    while (i < ranking.length || newRanking.length !== 3) {
      if (!pushNew && ranking[i].point < point) {
        newRanking.push(newRank)
        pushNew = true
      } else {
        newRanking.push(ranking[i++])
      }
    }
    ranking = newRanking
  }

  saveRanking(mode, ranking)
}
