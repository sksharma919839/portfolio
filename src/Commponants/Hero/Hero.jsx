import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import Heroimg from "../../Image/hero.png";
import resume from "../../Image/SUNILSHARMA.pdf";

function Hero() {
  return (
    <>
      <div>
        <div className="md:flex items-center justify-evenly my-[55px]">
          <div>
            <h3 className="text-[#ffffff] text-[48px]">
              Hi My name is{" "}
              <ReactTyped
                strings={["Sunil"]}
                typeSpeed={1}
                className="text-[#31c92c]"
              />
            </h3>
            <h3 className="text-[#ffffff] text-[48px]">I am a Passionate</h3>
            <h1>
              <ReactTyped
                strings={[
                  "Web Devloper",
                  "Web Designer",
                  "Full Stack Web Developer",
                ]}
                typeSpeed={100}
                className="text-[#31c92c] text-[48px]"
              />
            </h1>
            <div className="mt-[30px]">
              <Link
                to={resume}
                download=""
                target="_blank"
                className="text-[1.2rem] rounded-3xl text-[#ffffff] py-[11px] px-[28px] bg-[#31c92c] border border-[#31c92c] hover:bg-transparent hover:text-[#31c92c] transition-all duration-700"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-[1.2rem] mx-[20px] border border-[#31c92c] rounded-3xl text-[#ffffff] py-[11px] px-[28px] bg-[#31c92c] hover:bg-transparent hover:text-[#31c92c] transition-all duration-700"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <img
              src={Heroimg}
              className="h-[400px] sm:w-auto w-[320px]  md:mx-0 sm:mx-[30px] mx-auto md:my-0  my-[50px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
