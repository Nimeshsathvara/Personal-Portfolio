import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import Reactlogo from "../../public/reactjs.png";
import bootstraplogo from "../../public/download (1).png"
import tailwindcsslogo from "../../public/download.png"
import typescriptlogo from "../../public/download (2).png"
import nextjslogo from "../../public/download (3).png"
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTMl",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    // {
    //   id: 3,
    //   logo: java,
    //   name: "Java",
    // },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: Reactlogo,
      name: "React.js",
    },
    {
      id: 5,
      logo: bootstraplogo,
      name: "Bootstrap",
    },
    {
      id: 6,
      logo: tailwindcsslogo,
      name: "Tailwind.css",
    },
    {
      id: 7,
      logo: typescriptlogo,
      name: "Type Script",
    },
    {
      id: 8,
      logo: nextjslogo,
      name: "Next.js",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3 ">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 hover:bg-gray-700"
              key={id}
            >
              <img src={logo} className=" w-[90px] " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
