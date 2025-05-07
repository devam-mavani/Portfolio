import React from "react";
import pic_1 from "../assets/book-open.svg";
import pic_2 from "../assets/file-text.svg";

const About = () => {
  return (
    <section id="about" className="flex pt-20 justify-center items-center ">
      <div className=" w-420 h-181 bg-gradient-to-r from-[#180e15] via-[#180e15] to-[#600a4fb6]/15 rounded-4xl">
        <h2 className="p-10 font-extrabold text-6xl text-fuchsia-200">About</h2>
        <div className="space-y-10">
          <div className="info_about">
            <img src={pic_1} className="w-42 h-18" />
            <p className="max-w-150 text-2xl ">
              <span className="text-4xl font-normal ">FrontEnd Developer</span>
              <br />
              I'm a front-end developer with experience in creating responsive,
              interactive, and visually appealing web applications.
            </p>
          </div>

          <div className="info_about">
            <img src={pic_2} className="w-42 h-18" />
            <p className="max-w-150 text-2xl ">
              <span className="text-4xl font-normal ">ML Developer</span>
              <br />
              I'm an ML developer with hands-on experience in building and
              implementing machine learning models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
