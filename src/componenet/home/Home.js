import React from "react";
import styles from "./Home.module.css";
import {BsGithub,BsLinkedin,BsInstagram,BsWhatsapp} from "react-icons/bs"
const Home = () => {
    
  return (
    <div className={styles.home}>
      <section className={styles.homeContent}>
        <h3>Hello,It's Me</h3>
        <h1>Vikesh Kumar</h1>
        <h3>And I'm a  </h3>
        <p>
          "Welcome to my portfolio! I'm a passionate web developer with a knack
          for crafting immersive online experiences. My expertise lies in
          creating responsive websites that blend elegant design with seamless
          functionality."
        </p>
        <div className={styles.social}>
            <a href="#" style={{i:1}}><BsGithub/></a>
            <a href="#" style={{i:2}}><BsLinkedin/></a>
            <a href="#" style={{i:3}}><BsInstagram/></a>
            <a href="#" style={{i:4}}><BsWhatsapp/></a>
        </div>
        <a href="#" className={styles.btnMore}>More About Me</a>
      </section>
      <div className={styles.homesci}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.profileImage}
            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=612x612&w=0&k=20&c=nMpH7tfH___WoQzbtoytLfYhwb3pgpDXXJyEHzwhgIM="
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
