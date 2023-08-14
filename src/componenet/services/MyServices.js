import React from "react";
import style from "./MyServices.module.css";
import { BsFillPersonCheckFill } from "react-icons/bs";
const MyServices = () => {
  return (
    <section>
      <div className={style.services} id="#services">
        <div className={style.container}>
          <h1 className={style.subtitle}>
            My<span>Services</span>
          </h1>
          <div className={style.servicList}>
            <div>
              <BsFillPersonCheckFill className={style.icon}/>
              <h2>UI/UX Design</h2>
              <p>
                A MEAN Stack developer specializes in creating web applications
                using the MEAN stack, which comprises MongoDB for database
                management, Express.js for server-side development, Angular for
              </p>
              <a href="#" className={style.read}>
                Learn more
              </a>
            </div>
            <div>
            <BsFillPersonCheckFill className={style.icon}/>
              <h2>UI/UX Design</h2>
              <p>
                A MEAN Stack developer specializes in creating web applications
                using the MEAN stack, which comprises MongoDB for database
                management, Express.js for server-side development, Angular for
              </p>
              <a href="#" className={style.read}>
              Learn more
              </a>
            </div>
            <div>
            <BsFillPersonCheckFill className={style.icon}/>
              <h2>UI/UX Design</h2>
              <p>
                A MEAN Stack developer specializes in creating web applications
                using the MEAN stack, which comprises MongoDB for database
                management, Express.js for server-side development, Angular for
              </p>
              <a href="#" className={style.read}>
              Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
