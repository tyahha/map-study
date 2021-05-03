import {japanMap, JapanPrefectureId} from "../data/japan-map"
import {shuffleArray} from "../util/util"

export const getPrefectureQuestions = (): JapanPrefectureId[] => {
  return  shuffleArray(Array.from(japanMap.keys()))
}