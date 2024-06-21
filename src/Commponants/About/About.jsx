import React from "react";
import User from "../../Image/userr.jpeg";
import { ReactTyped } from "react-typed";
import Aboutcourse from "./Aboutcourse";

function About() {
  return (
    <>
      <div>
        <div className="lg:flex  justify-evenly my-[80px] mx-[40px]">
          <div className="flex items-center justify-center mb-[30px]">
            <img
              src={User}
              className="sm:h-[442px] h-[320px] sm:w-[442px] w-[320px] rounded-3xl opacity-75"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[#ffffff] text-[60px] font-bold">About Me</h1>
            <p className="text-[18px] text-[#ffffff]">
              I am a{" "}
              <ReactTyped
                strings={[
                  "Web Devloper",
                  "Web Designer",
                  "Full Stack Web Developer",
                ]}
                typeSpeed={100}
                className="text-[#31c92c] text-[18px]"
              />
            </p>
            <div>
              <Aboutcourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
