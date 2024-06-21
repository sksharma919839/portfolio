import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Form from "./Form";
import resume from "../../Image/SUNILSHARMA.pdf";

function Contact() {
  return (
    <>
      <div>
        <div className="md:flex justify-evenly ">
          <div className="md:w-[35%] md:mx-auto mx-[20px]">
            <h2 className="text-[#ffffff] text-[60px] mb-[30px] font-bold">
              Contact Me
            </h2>
            <div className="flex items-center my-[25px]">
              <IoIosMail className="text-[#31c92c]" size={30} />
              <p className="text-[#ffffff] text-[16px] mx-[10px]">
                sksharma919839@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={25} className="text-[#31c92c]" />
              <p className="text-[#ffffff]  text-[16px] mx-[10px]">
                (+91) 9166985539
              </p>
            </div>
            <div className="flex my-[25px]">
              <Link to="/">
                <FaLinkedin
                  size={30}
                  className="text-[#757575] mx-[10px] mt-3 hover:mt-2 hover:text-[#0A66C2] transition-all duration-700"
                />
              </Link>
              <Link to="/">
                <AiFillInstagram
                  size={30}
                  className="text-[#757575] mt-3 hover:mt-2 hover:text-[#FC045B] mx-[5px]  transition-all duration-700"
                />
              </Link>
              <Link to="/">
                <IoLogoWhatsapp
                  size={30}
                  className="text-[#757575] mt-3 hover:mt-2 hover:text-[#0CC042] mx-[10px] transition-all duration-700"
                />
              </Link>
            </div>
            <div className="my-[80px]">
              <Link
                to={resume}
                download=""
                target="_blank"
                className="text-[18px] text-[#ffffff] transition-all duration-700 bg-[#31c92c] border border-[#31c92c] hover:text-[#31c92c] px-[50px] py-[14px]  rounded-xl hover:bg-transparent"
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="md:w-[55%] md:mx-auto mx-[20px]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
