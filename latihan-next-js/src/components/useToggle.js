"use client"

import { useState } from "react"

export default function useToggle({ defaultValue = false }) {
  const [toggle, setToggle] = useState(defaultValue)

  const setToggleOn = () => {
    setToggle(true)
  }

  const setToggleOff = () => {
    setToggle(false)
  }

  const switchToggle = () => {
    setToggle((prev) => !prev)
  }

  return {
    toggle,
    setToggleOn,
    setToggleOff,
    switchToggle,
  }
}
