import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //helps prevent mistakes. 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
