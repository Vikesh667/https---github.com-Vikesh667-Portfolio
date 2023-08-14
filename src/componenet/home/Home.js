import React from "react";
import styles from "./Home.module.css";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className={styles.home} id="#">
      <section className={styles.homeContent}>
        <h3>Hello,It's Me</h3>
        <h1>Vikesh Kumar</h1>
        <h3 className={styles.texts}>
          And I'm a
          <span>
            <Typewriter
              options={{
                strings: [
                  "Front-End developer ",
                  "Back-End Developer",
                  "Teaching Assistent",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p>
          "Welcome to my portfolio! I'm a passionate web developer with a knack
          for crafting immersive online experiences. My expertise lies in
          creating responsive websites that blend elegant design with seamless
          functionality."
        </p>
        <div className={styles.social}>
          <a href="#" style={{ i: 1 }}>
            <BsGithub />
          </a>
          <a href="#" style={{ i: 2 }}>
            <BsLinkedin />
          </a>
          <a href="#" style={{ i: 3 }}>
            <BsInstagram />
          </a>
          <a href="#" style={{ i: 4 }}>
            <BsWhatsapp />
          </a>
        </div>
        <a href="#" className={styles.btnMore}>
          More About Me
        </a>
      </section>
      <div className={styles.homesci}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.profileImage}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Spinning_Ashoka_Chakra.gif"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
