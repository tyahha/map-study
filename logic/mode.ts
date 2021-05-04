import { japanArea, JapanArea } from "../data/japan-area"
import {shuffleArray} from "../util/util"

export enum Mode {
  Title,
  All,
  Chiho,
  Tohoku,
  Kanto,
  Chubu,
  ChugokuShikoku,
  Kyusyu,
  Result,
}

export const getModeQuestions = (mode: Mode): JapanArea[] => {
  const filter: (a: JapanArea) => boolean =
    mode === Mode.All
      ? (a) => a.type === "prefecture"
      : mode === Mode.Chiho
      ? (a) => a.type === "rural"
      : mode === Mode.Tohoku
      ? (a) => a.type === "prefecture" && a.rural === "tohoku"
      : mode === Mode.Kanto
      ? (a) => a.type === "prefecture" && a.rural === "kanto"
      : mode === Mode.Chubu
      ? (a) => a.type === "prefecture" && a.rural === "chubu"
      : mode === Mode.Kyusyu
      ? (a) => a.type === "prefecture" && a.rural === "kyusyu"
      : mode === Mode.ChugokuShikoku
      ? (a) => a.type === "prefecture" && (a.rural === "chugoku" || a.rural === "shikoku")
      : () => false

  return shuffleArray(Array.from(japanArea.values()).filter(filter))
}
