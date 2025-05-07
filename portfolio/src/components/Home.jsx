import React from "react";
import react_img from "../assets/portfolio_pic-removebg.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="flex justify-between items-center px-10 ">
          <div>
            <h2 className="text-7xl px-50 font-bold bg-gradient-to-r from-white via-pink-400 to-[#F7374F] bg-clip-text text-transparent pb-15">Hi,I'm Devam</h2>
            <p className="font-normal text-2xl max-w-[1300px] text-white px-50">
              I'm a front-end developer skilled in building responsive,
              user-friendly interfaces, with a decent background in machine
              learning for smart, data-driven features.
            </p>
          </div>
          <div className="flex flex-row p-10">
            <img className=' object-cover rounded-full h-145 w-145' src={react_img} alt="Name" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
