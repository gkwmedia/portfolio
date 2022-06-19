import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import AnimatedDiv from "./components/animated_div";
import { useState, useEffect } from "react";

import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import { FiChevronRight, FiMail } from "react-icons/fi";
import { FaExternalLinkAlt, FaUsersSlash } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import TechnologiesSlider from "./components/technologies";
import CircleLoaderCheck from "./components/circleLoaderCheck";

export default function Home() {
  const iconSize = 25;
  //hero section animation staes
  const [showName, setShowName] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButton, setShowButton] = useState(false);

  //form states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailError, setIsEmailError] = useState({
    error: false,
    message: "",
  });
  const [isNameError, setIsNameError] = useState({ error: false, message: "" });
  const [isMessageError, setIsMessageError] = useState({
    error: false,
    message: "",
  });
  const [formHeight, setFormHeight] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isSubmitted) {
      setFormHeight(document.getElementById("form-wrapper").offsetHeight);
    }
    if (isSubmitted) {
      document.getElementById("submit-wrapper").style.height =
        formHeight + "px";
    }
  }, [isSubmitted, formHeight]);

  useEffect(() => {
    console.log(isEmailError);
  }, [isEmailError]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(mailFormat)) {
      setIsEmailError({ error: true, message: "Please Enter a Valid Email" });
      console.log("here");
      return;
    } else {
      setIsEmailError({ state: false });
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.status == 200) {
      setIsSent(true);
    }
  };

  const submitNew = () => {
    setEmail("");
    setName("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div>
      <Head>
        <title>Thomas Gusewelle</title>
        <meta
          name='description'
          content="Thomas Gusewelle's Developer Portfolio"
        />
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='nav-wrapper'>
        <Navbar />

        <div className='hero relative'>
          <div className='z-10'>
            <div className='hero-min-height container'>
              <div className='z-10'>
                <h2 className='hero-introduction'>
                  <span>
                    <Typewriter
                      words={["Hi, my Name is"]}
                      // cursor={cursor}
                      // cursorStyle="_"
                      typeSpeed={70}
                      onLoopDone={() => setShowName(true)}
                    />
                  </span>
                </h2>
                {showName && (
                  <h1 className='name-header'>
                    <span>
                      <Typewriter
                        words={["Thomas Gusewelle"]}
                        onLoopDone={() => setShowParagraph(true)}
                      />
                    </span>
                  </h1>
                )}
                {showParagraph && (
                  <p className='w-prose'>
                    <span>
                      <Typewriter
                        words={[
                          "I'm a developer focusing on creating beautiful and engaging experiences on the web and mobile.",
                        ]}
                        typeSpeed={20}
                        cursor
                        cursorStyle='_'
                        onLoopDone={() => setShowButton(true)}
                      />
                    </span>
                  </p>
                )}
                {showButton && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}>
                    <button className='contact-btn'>
                      <a id='hero-contact-btn' href='#contact-section'>
                        Contact Me
                      </a>
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <svg
            className='svg1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'>
            <path
              fill='currentColor'
              d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
          </svg>
          <svg
            className='svg2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'>
            <path
              fill='currentColor'
              d='M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,224C672,224,768,256,864,266.7C960,277,1056,267,1152,229.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
          </svg>
        </div>

        <div className='section accent-bg' id={"about-section"}>
          <AnimatedDiv classname='container'>
            <h3 className='section-header'>About Me</h3>
            <div className='text-img'>
              <div>
                <p>
                  Hi! I&apos;m Thomas and I have a passion for creating
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
                  University(LSU) and the University of North Texas(UNT). While
                  in school at UNT I started my current job as Director of Media
                  where my passion for technology was reivigorated leading me to
                  study software developent at the masters level while also
                  seeking a career as a Front-End Developer.
                </p>

                {/* <div className="tech-container">
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
              </div> */}
              </div>
              <div className='profile-img-container'>
                <img src='/images/profile.jpeg' className='profile-img'></img>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        <TechnologiesSlider />

        <div className='section' id='project-section'>
          <div className='container'>
            <AnimatedDiv>
              <h3 className='section-header'>Projects</h3>
            </AnimatedDiv>
            <div className='project-grid'>
              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-right'>
                  <p className='highlight'>Featured Project</p>
                  <Link href='https://www.lossize.com'>
                    <h3 className='project-title cursor-pointer'>
                      Lossize.com
                    </h3>
                  </Link>
                  <p className=''>
                    A web app designed to allow people to simply and easily
                    track their weight loss journey. Set goals, input your
                    weight, and have it graphed out for you to track your daily
                    progress.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>NextJS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>TailwindCSS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Supabase</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Vercel</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Framer Motion</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Material UI</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link href={"https://github.com/gkwmedia/wieght-tracking"}>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                    <Link href={"https://lossize.com"}>
                      <FaExternalLinkAlt size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>

              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-left'>
                  <p className='highlight'>Featured Project</p>
                  <Link href='https://www.gkwmedia.com/themelios'>
                    <h3 className='project-title cursor-pointer'>Themelios</h3>
                  </Link>
                  <p className=''>
                    A platform built for churchs to leverage modern, responsive
                    web design while also hvaing all of their web data sync with
                    a custom mobile app. App features include: adding events to
                    device calendar, in-app emailing, and a complete bible
                    reader.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Flutter</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Webflow</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>APIs</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Jetboost</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Riverpod</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link href={"https://github.com/gkwmedia/ThemeliosDemoApp"}>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                    <Link href={"https://www.gkwmedia.com/themelios"}>
                      <FaExternalLinkAlt size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>

              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-right'>
                  <p className='highlight'>Featured Project</p>
                  <Link href='https://www.thomasgusewelle.com'>
                    <h3 className='project-title cursor-pointer'>This Site!</h3>
                  </Link>
                  <p className=''>
                    A website designed to introduce myself and showcase some of
                    the work I have done.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>NextJS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Nodemailer</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Vercel</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Framer Motion</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link href={"https://github.com/gkwmedia/wieght-tracking"}>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>

        <div className={"section"} id={"contact-section"}>
          <AnimatedDiv classname='container' id={"contact-container"}>
            {!isSubmitted ? (
              <div id='form-wrapper'>
                <h3 className='section-header' id='contact-header'>
                  Contact Me
                </h3>

                <form className='contact-form' onSubmit={handleSubmitForm}>
                  <div className='contact-group' id='name-group'>
                    <label className='form-label'>Name</label>
                    <input
                      type='text'
                      id='name'
                      onChange={(e) => setName(e.target.value)}></input>
                  </div>
                  <div className='contact-group' id='email-group'>
                    <label className={`form-label`}>Email</label>
                    <input
                      className={isEmailError.error ? "form-error" : ""}
                      type='email'
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}></input>
                    {isEmailError.error && (
                      <p className='error-text'>{isEmailError.message}</p>
                    )}
                  </div>
                  <div className='contact-group' id='message-group'>
                    <label className='form-label'>Message</label>
                    <textarea
                      name='paragraph'
                      id='paragraph'
                      rows='7'
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <button className='contact-btn' type='submit'>
                    Submit
                  </button>
                </form>
                <button onClick={() => setIsSubmitted(true)}>
                  change state
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                id='submit-wrapper'>
                <CircleLoaderCheck onClick={submitNew} isSent={isSent} />
              </motion.div>
            )}
          </AnimatedDiv>
        </div>

        <footer>
          <div className='footer-container'>
            <div className='footer-icons'>
              <a href='github.com/gkwmedia'>
                <FaGithub size={iconSize} />
              </a>
              <a href='https://www.linkedin.com/in/thomasgusewelle/'>
                <FaLinkedin size={iconSize} />
              </a>
              <a href='https://twitter.com/TGusewelle'>
                <FaTwitter size={iconSize} />
              </a>
              <a href='mailto:thomasgusewelle21@gmail.com'>
                <FiMail size={iconSize} />
              </a>
            </div>
            <p>Thomas Gusewelle &copy; 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
