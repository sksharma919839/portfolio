import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cv() {
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
          className="text-[1.2rem] rounded-3xl text-[#ca4949] py-[11px] px-[28px] bg-transparent border border-[#ca4949] hover:bg-[#ca4949] hover:text-[#ffffff] transition-all duration-700"
        >
          Resume
        </Link>
      ))}
    </>
  );
}

export default Cv;
