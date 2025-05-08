import React from "react";
import pic_1 from "../assets/todo_list.png";
import pic_2 from "../assets/machine_learning.jpeg";

const Projects = () => {
  return (
    <>
      <section id="projects" className="z-1">
        <header className="text-white font-bold text-6xl p-30 z-6">
          PROJECTS
        </header>

        <div className="grid grid-cols-4">
          <div className="project_info z-1">
            <img src={pic_1} className="h-[50] w-[10] p-10" alt="tetet" />
            <ul className="space-y-5">
              <li className="text-4xl font-bold px-10 ">ToDo-List</li>
              <li className="text-2xl m-5 p-5">
                A to-do list app for managing tasks with features to add, edit,
                and delete items. Built to improve organization and
                productivity.
              </li>
            </ul>
          </div>

          <div className="project_info">
            <img className="h-[50] w-[10] p-10" src={pic_2} alt="uyt" />
            <ul className="space-y-5">
              <li className="text-4xl font-bold px-10 ">
                Micro expression Detector
              </li>
              <li className="text-2xl m-5 p-5">
                A machine learning model that detects brief facial
                micro-expressions. Useful for emotion analysis and behavioral
                insights.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
