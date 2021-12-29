import React from "react"
import { Link } from "gatsby"
import { navbar, links, button, contact } from "../styles/navbar.module.css"
export default function Navbar() {
  return (
    <nav className={navbar}>
      <div className={links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link className={contact} to="/contact">
          Contact
        </Link>
      </div>
      <Link className={button} to="/contact">
        Get in contact
      </Link>
    </nav>
  )
}
