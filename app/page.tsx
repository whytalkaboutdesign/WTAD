"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = "/index.html"
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p>Redirecting to site...</p>
    </div>
  )
}
