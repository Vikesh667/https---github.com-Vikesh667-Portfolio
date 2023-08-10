import React from "react";
import style from "./Home.module.css";
import {BsGithub,BsLinkedin,BsInstagram,BsWhatsapp} from "react-icons/bs"
const Home = () => {
    
  return (
    <section className={style.home}>
      <div className={style.homeContent}>
        <h3>Hello,It's Me</h3>
        <h1>Vikesh Kumar</h1>
        <h3>And I'm a  </h3>
        <p>
          "Welcome to my portfolio! I'm a passionate web developer with a knack
          for crafting immersive online experiences. My expertise lies in
          creating responsive websites that blend elegant design with seamless
          functionality."
        </p>
        <div className={style.social}>
            <a href="#"><BsGithub/></a>
            <a href="#"><BsLinkedin/></a>
            <a href="#"><BsInstagram/></a>
            <a href="#"><BsWhatsapp/></a>
        </div>
        <a href="#" className={style.btnMore}>More About Me</a>
      </div>
      <div className={style.homesci}>
        <div className={style.imageWrapper}>
          <img
            className={style.profileImage}
            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=612x612&w=0&k=20&c=nMpH7tfH___WoQzbtoytLfYhwb3pgpDXXJyEHzwhgIM="
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
