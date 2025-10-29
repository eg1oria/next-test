"use client"

const { createContext, useState, useContext } = require("react");

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(0)

  const incProgress = (value) => {
    setProgress((prev) => Math.min(prev + value, 100))
  }
  
  const resetProgress = () => setProgress(0)

  return (
    <ProgressContext.Provider value={{ progress, incProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)