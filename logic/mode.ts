import { japanArea, JapanArea } from "../data/japan-area"
import { shuffleArray } from "../util/util"

export enum Mode {
  Title,
  Gaming,
  Result,
  RankingSelect,
  RankingView,
}

export enum GamingRural {
  All,
  Chiho,
  HokkaidoTohoku,
  Kanto,
  Chubu,
  Kinki,
  ChugokuShikoku,
  Kyusyu,
}

export const gamingRuralText = (rural: GamingRural): string => {
  switch (rural) {
    case GamingRural.All:
      return "全国都道府県"
    case GamingRural.Chiho:
      return "地方"
    case GamingRural.HokkaidoTohoku:
      return "北海道・東北地方"
    case GamingRural.Kanto:
      return "関東地方"
    case GamingRural.Chubu:
      return "中部地方"
    case GamingRural.Kinki:
      return "近畿地方"
    case GamingRural.ChugokuShikoku:
      return "中国・四国地方"
    case GamingRural.Kyusyu:
      return "九州地方"
    default:
      return ""
  }
}

export const getQuestions = (mode: GamingRural): JapanArea[] => {
  const filter: (a: JapanArea) => boolean =
    mode === GamingRural.All
      ? (a) => a.type === "prefecture"
      : mode === GamingRural.Chiho
      ? (a) => a.type === "rural"
      : mode === GamingRural.HokkaidoTohoku
      ? (a) => a.type === "prefecture" && (a.rural === "tohoku" || a.rural === "hokkaido")
      : mode === GamingRural.Kanto
      ? (a) => a.type === "prefecture" && a.rural === "kanto"
      : mode === GamingRural.Chubu
      ? (a) => a.type === "prefecture" && a.rural === "chubu"
      : mode === GamingRural.Kinki
      ? (a) => a.type === "prefecture" && a.rural === "kinki"
      : mode === GamingRural.Kyusyu
      ? (a) => a.type === "prefecture" && a.rural === "kyusyu"
      : mode === GamingRural.ChugokuShikoku
      ? (a) => a.type === "prefecture" && (a.rural === "chugoku" || a.rural === "shikoku")
      : () => false

  return shuffleArray(Array.from(japanArea.values()).filter(filter))
}
