import React from "react"
import Navbar from "./navbar"
import { layout, content } from "../styles/layout.module.css"
export default function Layout({ children }) {
  return (
    <div className={layout}>
      <Navbar />
      <div className={content}>{children}</div>
      <footer>@Copyrights Klaudia Paluch</footer>
    </div>
  )
}
