import React from "react"
import Navbar from "./navbar"
import { layout } from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layout}>
      <Navbar />
      <div>{children}</div>
      <footer>© Copyrights Klaudia Paluch</footer>
    </div>
  )
}
