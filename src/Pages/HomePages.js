import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import Home from "../componenet/home/Home";
import About from "../componenet/about/About";
import MyServices from "../componenet/services/MyServices";
import MySkill from "../componenet/myskill/MySkill";
import Project from "../componenet/project/Project";

const HomePages = () => {
  return (
    <div style={{background:"linear-gradient(180deg, orange, white, green)"}}>
      <Navbar />
     
     <section id="/">
     <Home />
      </section> 
      <section id="about">
      <About />
      </section> 
      <section>
      <MyServices />
      </section> 
      <section id="skill">
      <MySkill />
      </section> 
      <section id="project">
      <Project/>
      </section> 
      
    </div>
  );
};

export default HomePages;
