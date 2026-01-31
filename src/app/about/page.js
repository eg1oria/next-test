"use client"

import { useTheme } from "@/contexts/ThemeContext"
import "./about.css"
import { useEffect } from "react"

export default function About() {
 const {setDarkTheme} = useTheme()

 useEffect(() => {
  setDarkTheme((prev) => {
    if(!prev) {
      prev
    } else {
      !prev
    }
  })
 })
  return (
  <div className="">
    <h1 className="">Страница Про нас</h1>
  </div>
  )
}