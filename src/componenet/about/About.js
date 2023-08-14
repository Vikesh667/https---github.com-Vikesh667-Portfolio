import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about} id="#about">
      <div className={style.aboutImage}>
        <div className={style.imageWrapper}>
          <img
            className={style.profileImage}
            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=612x612&w=0&k=20&c=nMpH7tfH___WoQzbtoytLfYhwb3pgpDXXJyEHzwhgIM="
            alt="Profile"
          />
        </div>
      </div>
      <div className={style.text}>
        <h2>
          About<span>Me</span>
        </h2>
        <h4>Mern Stack Developer</h4>
        <p>
          A MEAN Stack developer specializes in creating web applications using
          the MEAN stack, which comprises MongoDB for database management,Express.
          js for server-side development, Angular for dynamic front-endinterfaces,
          and Node.js for server runtime. Responsibilities include designing 
          application architecture, building APIs, developing user interfaces, 
          managing databases, testing, debugging, and optimizing performance. 
          This role requires expertise in JavaScript, server-sidescripting, and 
          front-end development, along with a strong grasp of database concepts.
          Continuous learning to stay updated with evolving technologies is crucial 
          for success as a MEAN Stack developer.
        </p>
        <a href="#" className={style.btnMore}>
          More About Me
        </a>
      </div>
    </div>
  );
};

export default About;
