import React, { useState } from "react";
import style from "./Navbar.module.css";
import {BsList} from "react-icons/bs"
const Navbar = () => {
  const [mobileViews,setMobileViews]=useState(false)
 const handleToggole=()=>{
       setMobileViews(!mobileViews)
  }
  return (
   <nav className={style.navbar}>
    <div className={style.logo}>
    <div className={style.logo}>
  <h1>
    <span>V</span>
    <span>i</span>
    <span>k</span>
    <span>e</span>
    <span>s</span>
    <span>h</span>
  </h1>
</div>

    </div>
    <ul className={style.menu}>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Resume</a></li>
      <li><a href="">Skill</a></li>
      <li><a href="">Project</a></li>
      <button className={style.btn}>Contact Us</button>
    </ul>
  {mobileViews && <ul className={style.menu1}>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Resume</a></li>
      <li><a href="">Skill</a></li>
      <li><a href="">Project</a></li>
      <button className={style.btn}>Contact Us</button>
    </ul>}
    <button className={style.mobilemenubutton} onClick={handleToggole}><BsList/></button>
   </nav>
  );
};

export default Navbar;
