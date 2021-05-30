import { useEffect, useRef, useState, FC } from "react"

export const FadeOut: FC<{
  time: number
  show: boolean
}> = ({ show, time, children }) => {
  const [isShow, setShow] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => {
    if (show) {
      setShow(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setShow(false)
      }, time)
    }
  }, [children])

  return isShow ? <>{children}</> : <></>
}
