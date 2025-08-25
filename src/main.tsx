import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"

console.log("main.tsx loading...")
console.log("React:", React)
console.log("Document ready:", document.readyState)

const rootElement = document.getElementById("root")
console.log("Root element:", rootElement)

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("Root element not found!")
}
