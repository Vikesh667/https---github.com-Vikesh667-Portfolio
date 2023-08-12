import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import Home from "../componenet/home/Home";
import About from "../componenet/about/About";
import MyServices from "../componenet/services/MyServices";
import MySkill from "../componenet/myskill/MySkill";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <MyServices />
      {/* <MySkill /> */}
    </div>
  );
};

export default HomePages;
