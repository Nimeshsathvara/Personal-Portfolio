import React from "react";

import reactjs from "../../public/reactjs.png";
import S1 from "../../public/s1.png";
import S2 from '../../public/s2.png';
import S3 from '../../public/s3.png';
import s4 from '../../public/s4.png';
function PortFolio() {
    const cardItem = [
        {
            id: 1,
            logo: S1,
            name: "Swiggy-Clone",
            linked: "https://clone-swiggy-react-web.vercel.app/",
        },
        {
            id: 2,
            logo: S2,
            name: "Password Maker App",
            linked: "https://password-makerapp.vercel.app/",
        },
        {
            id: 3,
            logo: S3,
            name: "E-Commerce-Website",
            linked: "https://e-commerce-website-using-react-flax.vercel.app/",
        },
        {
            id: 4,
            logo: s4,
            name: "Figma using Tailwindcss",
            linked: "https://nimeshsathvara.github.io/Website-Templete-design-responsive/",
        },

    ];
    return (
        <div
            name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
                <span className=" underline font-semibold">Featured Projects</span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {cardItem.map(({ id, logo, name, linked }) => (
                        <div
                            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                        >
                            <img
                                src={logo}
                                className="w-full object-fill h-[120px] p-1  border-[2px]"
                                alt=""
                            />
                            <div>
                                <div className="px-2 font-bold text-xl mb-2">{name}</div>

                            </div>
                            <div className=" px-6 py-4 space-x-3 justify-around">

                                <a href={linked}> <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded" > Source code</button> </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortFolio;