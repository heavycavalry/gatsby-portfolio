import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import { header, button, content, image } from "../styles/home.module.css"
export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div className={content}>
          <h1>
            <span>Hello </span>, I'm Klaudia
          </h1>
          <h2>
            Right now a third year IT student. I love creating websites using
            modern frontend web technologies.
          </h2>
          <p>
            Find me on <a href="https://github.com/heavycavalry">Github </a> ||
            <a href="https://github.com/heavycavalry"> LinkedIn</a>
          </p>
          <p>
            Download <a href="https://github.com/heavycavalry">resume CV </a>
          </p>
          <Link className={button} to="/projects">
            My projects
          </Link>
        </div>
        <img
          className={image}
          src="/idea.svg"
          alt="an ilustration of smiling woman sitting with laptop"
        />
      </section>
    </Layout>
  )
}
