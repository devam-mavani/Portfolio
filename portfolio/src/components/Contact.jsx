import React from "react";
import git from "../assets/github.svg";
import insta from "../assets/instagram.svg";
import mail from "../assets/mail.svg";

const Contact = () => {
  return (
    <section id="contact" className="z-1">
      <div className="w-full h-95 mt-20 grid grid-cols-2 bg-gradient-to-r from-[#610e48] via-[#180e15] to-[#600a4fb6]/15 ">
        <div className="text-white mx-70 text-5xl">
          <h2 className="font-bold p-7 mt-15">Contact Me</h2>
          <p className="3xl p-7">Feel free to reach out</p>
        </div>
        <div className="grid grid-rows-3 mt-20 mx-30">
          <div className="flex flex-row ">
            <img src={git} className="h-10 w-10" />
            <a
              href="https://github.com/devam-mavani"
              className="pt-1 px-5 text-white font-medium text-2xl hover:text-blue-500"
            >
              devam-mavani
            </a>
          </div>
          <div className="flex flex-row ">
            <img src={mail} className="h-10 w-10" />
            <a
              href="mailto:devam137mavani@gmail.com"
              className="pt-1 px-5 text-white font-medium text-2xl hover:text-blue-500"
            >
              devam137mavani@gmail.com
            </a>
          </div>

          <div className="flex flex-row ">
            <img src={insta} className="h-10 w-10" />
            <a
              href="https://www.instagram.com/devmm_13/"
              className="pt-1 px-5 text-white font-medium text-2xl hover:text-blue-500"
            >
              devmm_13
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
