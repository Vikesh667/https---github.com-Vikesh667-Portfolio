import React from "react";
import style from "./MySkill.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJava, BiLogoNodejs } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
const MySkill = () => {
  return (
    <div className={style.main}>
      <h1 className={style.skiilheading}>
        My<span>Skills</span>
      </h1>
      <div className={style.section}>
        <div className={style.container}>
          <h1 className={style.heading}>Technical Skills</h1>
          <div className={style.technicalBars}>
            <div className={style.bars}>
              <AiFillHtml5 />
              <div className={style.info}>
                <span>HTML</span>
              </div>
              <div className={`${style.progressline} ${style.html}`}>
                <span></span>
              </div>
            </div>
            <div className={style.bars}>
              <BiLogoCss3 />
              <div className={style.info}>
                <span>CSS</span>
              </div>
              <div className={`${style.progressline} ${style.css}`}>
                <span></span>
              </div>
            </div>
            <div className={style.bars}>
              <IoLogoJavascript />
              <div className={style.info}>
                <span>JavaScript</span>
              </div>
              <div className={`${style.progressline} ${style.javaScript}`}>
                <span></span>
              </div>
            </div>
            <div className={style.bars}>
              <GrReactjs />
              <div className={style.info}>
                <span>Reactjs</span>
              </div>
              <div className={`${style.progressline} ${style.reactjs}`}>
                <span></span>
              </div>
            </div>
            <div className={style.bars}>
              <BiLogoJava />
              <div className={style.info}>
                <span>Java</span>
              </div>
              <div className={`${style.progressline} ${style.java}`}>
                <span></span>
              </div>
            </div>
            <div className={style.bars}>
              <BiLogoNodejs />
              <div className={style.info}>
                <span>Nodejs</span>
              </div>
              <div className={`${style.progressline} ${style.nodejs}`}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <h1 className={style.heading}>Professional Skill</h1>
          <div className={style.radialBars}>
            <div className={style.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={style.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${style.path} ${style.path1}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={style.percentages}>90%</div>
              <div className={style.text}>creativity</div>
            </div>
            <div className={style.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={style.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${style.path} ${style.path2}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={style.percentages}>60%</div>
              <div className={style.text}>Communication</div>
            </div>
            <div className={style.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={style.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${style.path} ${style.path3}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={style.percentages}>70%</div>
              <div className={style.text}>Problem Solving</div>
            </div>
            <div className={style.radialBar}>
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={style.progressBar}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${style.path} ${style.path4}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={style.percentages}>80%</div>
              <div className={style.text}>TeamWork</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
