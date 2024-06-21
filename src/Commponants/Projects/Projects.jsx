import React from "react";
import work1 from "../../Image/work-1.jpg";
import work2 from "../../Image/work-2.png";
import work3 from "../../Image/work-3.png";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const projectItems = [
  {
    id: 1,
    img: work3,
    h3: "TRADE WEBSITE",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and multipages website.",
    link: "https://sksharma919839.github.io/trade/",
  },
  {
    id: 2,
    img: work2,
    h3: "Listrace Website",
    p: "This website has been create by React JS and TailwindCSS. This website was a fully responsive and singlepage website.",
    link: "https://sksharma919839.github.io/Listrace/",
  },
  {
    id: 3,
    img: work1,
    h3: "Restaurent Website",
    p: "The Website is for Restaurent Menu Bar And About the restaurent Section and conect with Google Form Review.",
    link: "https://restarent-menubar.netlify.app/",
  },
];
function Projects() {
  return (
    <>
      <div className="my-[40px]">
        <div className="ml-[50px]">
          <h1 className="text-[#ffffff] text-[60px] mb-[50px]">My Work</h1>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {projectItems.map((item) => (
            <div
              key={item.id}
              className="mx-[15px] work sm:h-[400px] my-[30px] flex-wrap rounded-xl overflow-hidden sm:w-[350px] relative w-[290px] h-[360px] "
            >
              <img
                src={item.img}
                className="rounded-xl sm:h-[400px] sm:w-[350px] w-[290px] h-[360px]"
                alt=""
              />
              <div className="layer">
                <h3 className="font-medium mb-[20px] text-[#31c92c] text-[24px]">
                  {item.h3}
                </h3>
                <p className="text-[16px] text-[#ffffff]">{item.p}</p>
                <Link
                  to={item.link}
                  target="_blank"
                  className="mt-[20px] text-[#31c92c] text-[18px] leading-[60px] bg-[#ffffff] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-[40px] flex items-center justify-center">
          <Link
            to="/project"
            className="text-[18px] text-[#31c92c] transition-all  duration-1000 border border-[#31c92c] px-[30px] py-[15px] rounded-full hover:bg-[#31c92c] hover:text-[#ffffff]"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
