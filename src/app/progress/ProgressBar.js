"use client"

import { useProgress } from "../ProgressContext"

export default function ProgressBar() {
  const {progress, progressList} = useProgress()

  return (
    <div style={{
        height: "5px",
        width: "100%",
        background: "#eee",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "blue",
          transition: "width 0.5s ease"
        }}></div>

        
      </div>
  )
}