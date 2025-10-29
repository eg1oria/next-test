"use client"

import { useProgress } from "@/app/ProgressContext"
import { useState } from "react"

export default function ProgressButton() {
  const {incProgress} = useProgress()
  const [ active, setActive ] = useState(true)

  function handleActive() {
    setActive(false)

    incProgress(10)
  }
 return (
  <button //disabled={!active}
        onClick={handleActive}
        style={{
          padding: "20px",
          background: active ? "blue" : "gray",
          color: "white",
          marginBottom: "10px",
          borderRadius: active ? "0px" : "20px",
          border: "none",
          transition: "border-radius 0.3s ease, background 0.3s ease",
        }}
      >{active ? "Выполнить" : "Выполнено"}</button>
 )
  
}