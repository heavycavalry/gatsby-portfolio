import { Link } from "gatsby"
import { doc } from "prettier"
import React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"
import {
  header,
  button,
  content,
  image,
  animation,
} from "../styles/home.module.css"
export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div className={content}>
          <h1>
            <span>Hello </span>, I'm Klaudia
          </h1>
          <h2 className={animation}></h2>
          <h3>
            Right now a third year IT student. I love creating websites using
            modern frontend web technologies.
          </h3>
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
          src="/idea2.png"
          alt="an ilustration of smiling woman sitting with laptop"
        />
      </section>
    </Layout>
  )
}

// const text = ["UX Design", "UI Design", "Web development", "Front-end"]

// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";
// ;(function (type) {
//   if (count === text.length) {
//     count = 0
//   }
//   currentText = text[count]
//   letter = currentText.slice(0, ++index)
//   document.querySelector("animation").textContent = letter
//   if (letter.length === currentText.length) {
//     count++
//     index = 0
//   }
//   setTimeout(type, 400)
// })()
