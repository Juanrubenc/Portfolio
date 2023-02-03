import React from "react";
import { AiFillGithub, FiLink } from "react-icons/all";

//use tailwindcss to style the projects component

const Projects = () => {
  return (
    <div className="mx-auto w-full px-4 md:px-8 lg:max-w-screen-xl pt-24">
      <h2 class="text-4xl md:text-5xl mb-3 font-extrabold text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

        <div className="bg-slate-800 text-whit transition hover:bg-slate-700 duration-700 hover:scale-105  rounded-3xl shadow-2xl p-6">
          <img className=" rounded-md" src="/Mover.png" alt="Mover" />
          <h3 className="text-2xl mt-3 text-slate font-bold mb-2">Project 1</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <div className="mt-3 flex gap-4">
            <span className=" bg-cyan-100 text-black p-1.5 rounded-md text-xs font-semibold">React</span>
            <span className=" bg-sky-400 text-black  p-1.5 rounded-md text-xs font-semibold">Tailwind</span>
          </div>
          <div className="flex gap-2 mt-3">
            <a href="https://github.com/Juanrubenc/Mover" target="_blank" className="text-slate-400 hover:text-slate-300">
              <AiFillGithub className="inline-block text-3xl" />
            </a>
            <a  target="_blank" href="https://jovial-crostata-987ffe.netlify.app/" className="text-slate-400 hover:text-slate-300">
              <FiLink className="text-3xl inline-block" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
