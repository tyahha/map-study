import React from "react"

export const Overlay: React.FC = (props) => {
  return (
    <>
      <div className={"overlay"} />
      <div className={"overlay-content"}>
        {props.children}
      </div>
      </>
  )
}