import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Resume() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://omhardik89.pythonanywhere.com/cv/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.map((item) => (
        <Link
          key={item.id}
          to={item.pdf}
          download=""
          target="_blank"
          className="text-[18px] text-[#ffffff] transition-all duration-700 bg-[#e7b169] border border-[#e7b169] hover:text-[#e7b169 ] px-[50px] py-[14px]  rounded-xl hover:bg-transparent"
        >
          Download CV
        </Link>
      ))}
    </>
  );
}

export default Resume;
