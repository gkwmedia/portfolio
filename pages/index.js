import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

import { FiChevronRight } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const iconSize = 25;

  return (
    <div>
      <Head>
        <title>Thomas Gusewelle</title>
        <meta
          name="description"
          content="Thomas Gusewelle's Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="hero">
        <div className="container">
          <h2 className="hero-introduction">Hi, my Name is</h2>
          <h1 className="name-header">Thomas Gusewelle</h1>
          <p>
            I'm a developer focusing on creating beautiful and engaging
            experiences on the web and mobile. Currently I'm a Director of Media
            and looking for a development focused role.
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
      </div>

      <div className="section" id="about-section">
        <div className="container">
          <div className="text-img">
            <div>
              <h3 className="section-header">About Me</h3>
              <p>
                Hi! My name is Thomas and I have a passion for creating
                beautiful front-ends that engage users in intuative ways. My
                passion for technology started when I was a kid and would take
                apart old computers with a crazy idea to turn them into a
                robot(if only it was that easy) and grew into programming and
                tinkering with different linux operating systems.
              </p>
              <br />
              <p>
                From there my life took a different path, earning a Bachelors
                and Masters Degree in Music Performance from Louisiana State
                University(LSU) and the University of North Texas(UNT). While in
                school at UNT I started my current job as Director of Media
                where my passion for technology was reivigorated leading me to
                study software developent at the masters level while also
                seeking a career as a Front-End Developer.
              </p>
              <div className="tech-container">
                <h3 className="section-subheader">
                  Technologies I've Recently Used
                </h3>
                <div className="tech-grid-2">
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Javascript</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>NextJS</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>React</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Flutter</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Framer Motion</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Webflow</p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/images/profile.jpeg" className="profile-img"></img>
          </div>
        </div>
      </div>

      <div className="section" id="project-section">
        <div className="container">
          <h3 className="section-header">Projects</h3>

          <div className="project-card">
            <p className="highlight">Featured Project</p>
            <Link href="https://www.lossize.com">
              <h3 className="project-title cursor-pointer">Lossize.com</h3>
            </Link>
            <p className="text-white">
              A web app designed to allow people to simply and easily track
              their weight loss journey. Set goals, input your weight, and have
              it graphed out for you to track your daily progress.
            </p>
            <div className="tech-container">
              <p className="highlight mb-1">Technologies Used</p>
              <div className="tech-grid-2">
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>NextJS</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>TailwindCSS</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Supabase</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Vercel</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Framer Motion</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Material UI</p>
                </div>
              </div>
            </div>
            <div className="icons-container">
              <Link href={"https://github.com/gkwmedia/wieght-tracking"}>
                <FaGithub size={iconSize} className="icon" />
              </Link>
              <Link href={"https://lossize.com"}>
                <FaExternalLinkAlt size={iconSize} className="icon" />
              </Link>
            </div>
          </div>

          <div className="project-card">
            <p className="highlight">Featured Project</p>
            <Link href="https://www.gkwmedia.com/themelios">
              <h3 className="project-title cursor-pointer">Themelios</h3>
            </Link>
            <p className="text-white">
              A platform built for churchs to leverage modern, responsive web
              design while also hvaing all of their web data sync with a custom
              mobile app. App features include: adding events to device
              calendar, in-app emailing, and a complete bible reader.
            </p>
            <div className="tech-container">
              <p className="highlight mb-1">Technologies Used</p>
              <div className="tech-grid-2">
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Flutter</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Webflow</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>APIs</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Jetboost</p>
                </div>
                <div className="tech-item">
                  <FiChevronRight className="tech-icon" />
                  <p>Riverpod</p>
                </div>
              </div>
            </div>
            <div className="icons-container">
              <Link href={"https://github.com/gkwmedia/ThemeliosDemoApp"}>
                <FaGithub size={iconSize} className="icon" />
              </Link>
              <Link href={"https://www.gkwmedia.com/themelios"}>
                <FaExternalLinkAlt size={iconSize} className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}
