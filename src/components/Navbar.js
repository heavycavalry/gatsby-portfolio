import React from "react"
import { Link } from "gatsby"
import { navbar, links } from "../styles/navbar.module.css"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { FaImage } from "@react-icons/all-files/fa/FaImage"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
export default function Navbar() {
  return (
    <nav className={links}>
      <Link aria-label="home" to="/">
        <FaHome />
      </Link>
      <Link aria-label="about me" to="/about">
        <FaUser />
      </Link>
      <Link aria-label="projects" to="/projects">
        <FaImage />
      </Link>
      <Link aria-label="contact" to="/contact">
        <FaEnvelope />
      </Link>
    </nav>
  )
}

{
  /* <Link className={button} to="/contact">
        Get in contact
      </Link> */
}
