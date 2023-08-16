import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import Home from "../componenet/home/Home";
import About from "../componenet/about/About";
import MyServices from "../componenet/services/MyServices";
import MySkill from "../componenet/myskill/MySkill";
import Project from "../componenet/project/Project";
import Contact from "../componenet/contact/Contact";
import Blog from "../componenet/blog/Blog";

const HomePages = () => {
  return (
    <div>
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
       <section id="contact">
        <Contact/>
       </section>
       <section id="blog">
        <Blog/>
       </section>
    </div>
  );
};

export default HomePages;
