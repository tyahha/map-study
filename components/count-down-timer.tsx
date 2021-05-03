import {useEffect, useState} from "react"

export const CountDownTimer = ({time, timeUp}: {time: number, timeUp: () => void}) => {
  const [prevTime, setPrevTime] = useState(new Date().getTime())
  const [rest, setReset] = useState(time)

  const timeoutFunc = () => {
    const now = new Date().getTime()
    const r = Math.max(rest - (now - prevTime), 0)
    setPrevTime(now)
    setReset(r)
    if (r > 0) {
      setTimeout(timeoutFunc, 100)
    } else {
      timeUp()
    }
  }

  useEffect(() => {
    setTimeout(timeoutFunc, 100)
  }, [time])

  return <p className={"timer"}>{`残り時間：${rest / 1000} 秒`}</p>
}