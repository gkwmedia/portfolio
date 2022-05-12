import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
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
        </div>
      </div>

      <div className="section">
        <h3 className="section-header">About Me</h3>
        <p>
          Hi! My name is Thomas and I have a passion for creating beautiful
          front-ends that engage users in intuative ways. My passion for
          technology started when I was a kid and would take apart old computers
          with a crazy idea to turn them into a robot(if only it was that easy)
          and grew into programming and tinkering with different linux operating
          systems.
        </p>
        <br />
        <p>fdshjkfdhsajkfdhsja</p>
      </div>

      <footer></footer>
    </div>
  );
}
