import React from "react";

import pic from "../../public/nd.png";

import { FaJs, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import { SiCss3, SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-8 md:px-20 my-6"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Nimesh Sathvara is a proficient web developer skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap. He is dedicated to creating dynamic and responsive web applications, showcasing his expertise in front-end development


            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Nimeshsathvara" target="_blank">
                      <FaSquareGithub className="text-2xl cursor-pointer hover:scale-125" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nimesh-sathvara-929963226/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiHtml5 className="text-2xl md:text-3xl hover:scale-125 rounded-full border-[2px] cursor-pointer" />
                  <SiCss3 className="text-2xl md:text-3xl hover:scale-125  rounded-full border-[2px] cursor-pointer" />
                  <FaJs className="text-2xl md:text-3xl hover:scale-125 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-125 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48   order-1">
            <img
              src={pic}
              className="w-[70%] h-[100%]  object-cover"

              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
