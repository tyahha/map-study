import { JapanAreaId } from "../data/japan-area"
import {MouseEventHandler, useCallback} from "react"

export const areaFillColor = "#64ab5b"
export const oceanColor = "#8ea7e6"

export const useAreaClick = (onClick?: (id: JapanAreaId) => void): MouseEventHandler<SVGPathElement> => {
  return useCallback(
    (e) => {
      // @ts-ignore
      const id: JapanAreaId | undefined = e.target.id

      if (id && onClick) {
        onClick(id)
      }
    },
    [onClick],
  )
}

export type MapProps = { onClick?: (id: JapanAreaId) => void }