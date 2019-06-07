import React, { ReactNode } from "react"
import Button from "../Button/Button"

interface Props {
  children: ReactNode
  to?: string
  href?: string
  toggle?: () => void
  text?: string
  align?: "left" | "right"
  closeOnClick?: boolean
  onClick?: () => void
}

const MenuItem = (props: Props) => {
  const closeMenuCheck = () => {
    if (props.toggle && (props.closeOnClick || window.innerWidth <= 768))
      props.toggle()
  }

  return (
    <div onClick={closeMenuCheck}>
      <Button
        color="none"
        text={props.text ? props.text : "white"}
        className={`block hover:underline w-full text-${
          props.align ? props.align : "left"
        }`}
        style={{ whiteSpace: "nowrap", fontFamily: "Lato" }}
        to={props.to}
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  )
}

export default MenuItem
