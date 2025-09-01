import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"

const rootElement = document.getElementById("root")
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  // Register service worker for caching schema assets
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.warn("SW registration failed:", err)
      })
    })
  }
} else {
  console.error("Root element not found!")
}
