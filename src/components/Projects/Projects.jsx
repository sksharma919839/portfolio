import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";

function Projects() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("https://omhardik89.pythonanywhere.com/project/");
        setData(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  if (loading) {
    return (
      <>
        <div>
          <div>
            <h1>My Work</h1>
          </div>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading projects...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>
          <div>
            <h1>My Work</h1>
          </div>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ color: 'red' }}>{error}</p>
          </div>
        </div>
      </>
    );
  }

  const displayedProjects = [...data].reverse().slice(0, visibleItems);



  return (
    <>
      <div className="my-[40px]" data-aos="fade-up">
        <div className="ml-[50px]">
          <h1 className="text-[#ffffff] text-[60px] mb-[50px]">My Work</h1>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {displayedProjects.map((item, index) => (
            <div
              key={item.id}
              className="mx-[15px] work sm:h-[400px] my-[30px] flex-wrap rounded-xl overflow-hidden sm:w-[350px] relative w-[290px] h-[360px] "
            >
              <img
                src={item.image}
                className="rounded-xl sm:h-[400px] sm:w-[350px] w-[290px] h-[360px]"
                alt=""
              />
              <div className="layer">
                <h3 className="font-medium mb-[20px] text-[#e7b169] text-[24px]">
                  {item.h}
                </h3>
                <p className="text-[16px] text-[#ffffff]">{item.p}</p>
                <Link
                  to={item.link}
                  target="_blank"
                  className="mt-[20px] text-[#e7b169] text-[18px] leading-[60px] bg-[#ffffff] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-[40px] flex items-center justify-center">
          {visibleItems < data.length && (
            <button onClick={handleSeeMore} className="text-[18px] text-[#e7b169] transition-all  duration-1000 border border-[#e7b169] px-[30px] py-[15px] rounded-full hover:bg-[#e7b169] hover:text-[#ffffff]">See More</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
