import React from "react"
import Layout from "../../components/Layout"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { FaJsSquare } from "@react-icons/all-files/fa/FaJsSquare"
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt"
import { FaSass } from "@react-icons/all-files/fa/FaSass"
import { FaFigma } from "@react-icons/all-files/fa/FaFigma"
import { icons, icon, image, typewriter } from "../../styles/about.module.css"
import { Typewriter } from "react-simple-typewriter"
export default function About() {
  return (
    <Layout>
      <section>
        <h2>Go big or go home</h2>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui
          rhoncus, porta risus nec, porttitor ligula. Donec sit amet gravida
          turpis, volutpat fermentum sapien. Maecenas eu quam imperdiet, egestas
          dui vel, molestie lorem. Phasellus nec ultricies orci. Suspendisse
          lobortis vulputate ex nec congue. Maecenas est elit, molestie nec diam
          sit amet, imperdiet iaculis quam. In dapibus blandit venenatis.
          Pellentesque sit amet turpis egestas, dapibus lacus et, suscipit enim.{" "}
        </article>
        <p>I work with</p>
        <div className={icons}>
          <div>
            <FaReact className={icon} />
            <p>React</p>
          </div>
          <div>
            <FaJsSquare className={icon} />
            <p>JavaScript</p>
          </div>
          <div>
            <FaHtml5 className={icon} />
            <p>HTML5</p>
          </div>
          <div>
            <FaCss3Alt className={icon} />
            <p>CSS</p>
          </div>
          <div>
            <FaSass className={icon} />
            <p>Sass</p>
          </div>
          <div>
            <FaFigma className={icon} />
            <p>Figma</p>
          </div>
        </div>
        <p>I have knowledge of</p>
        <div className={typewriter}>
          <Typewriter
            words={["Gatsby js", "C#", "Sql", "Wordpress"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </div>
      </section>
      <img className={image} src="/dev.svg" alt="" />
    </Layout>
  )
}
