import React, { useState } from "react";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyjeab2D8LwPYMa9B8sRn5_ZOa8ql6n9bdKYhkxY1QLJ0v1ikhBhcEa0c2SmKrKh0xA/exec";

const GoogleForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        setMessage("Message Sent Successfully");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
          name="Name"
          placeholder="Enter Your Name Here"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email Here"
          className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
          required
        />
        <input
          type="text"
          name="Number"
          className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
          placeholder="Enter Your Mobile Number Here"
          required
        />
        <textarea
          typeof="message"
          name="Message"
          placeholder="Enter Your Message Here"
          className="text-[#757575] bg-[#262626] text-[25px] my-[20px] px-[20px] rounded-xl w-[90%] h-[160px]"
        ></textarea>
        <button
          type="sumbit"
          className="text-[18px] text-[#ffffff] transition-all duration-700 bg-[#31c92c] border border-[#31c92c] hover:text-[#31c92c] px-[50px] py-[14px] mt-[10px] mb-[60px]  rounded-xl hover:bg-transparent"
        >
          Sumbit
        </button>
      </form>
      <p id="msg" className="text-[#61b752] text-[14px] mt-[-40px] block">
        {message}
      </p>
    </div>
  );
};

export default GoogleForm;
