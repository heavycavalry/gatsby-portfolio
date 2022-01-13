import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import { Typewriter } from "react-simple-typewriter"
import { header, button, image, typewriter } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <h1>
          <span>Hello </span>, I'm Klaudia
        </h1>
        <div className={typewriter}>
          <Typewriter
            words={["UX DESIGN", "UI DESIGN", "WEB DEVELOPMENT"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
          />
        </div>
        <h3>
          Right now a third year IT student. I love creating websites using
          modern frontend web technologies.
        </h3>
        <p>
          Find me on{" "}
          <a href="https://github.com/heavycavalry" target="_blank">
            Github{" "}
          </a>{" "}
          ||
          <a
            href="https://www.linkedin.com/in/klaudia-paluch-11499b179/"
            target="_blank"
          >
            {" "}
            LinkedIn
          </a>
        </p>
        <p>
          Download{" "}
          <a href="/CV_KlaudiaPaluch.pdf" download>
            resume CV{" "}
          </a>
        </p>
        <Link className={button} to="/projects">
          My projects
        </Link>
      </section>
      <img
        className={image}
        src="/idea.svg"
        alt="an ilustration of smiling woman sitting with laptop"
      />
    </Layout>
  )
}
