import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import wanderlustImg from "../../../public/images/wanderlust.jpg";
import todoImg from "../../../public/images/TODO.png";
import netflixImg from "../../../public/images/Netflix.png";
import blogifyImg from "../../../public/images/Blogify.png";


const projects = [
    {
      name: "WanderLust",
      desc: "A travel exploration web app that allows users to discover and share exciting destinations. Built with Node.js, Express, MongoDB, and EJS, it supports creating, editing, and deleting travel experiences.",
      align: "right",
      image: wanderlustImg,
      link: "https://wanderlust-project-2-lfv1.onrender.com",
    },
    {
      name: "TO DO App",
      desc: "A simple and responsive To-Do App built with React that allows users to add, edit, and delete tasks seamlessly.",
      align: "left",
      image: todoImg,
      link: "https://todo-react-three-liard.vercel.app/",
    },
    {
      name: "Netflix Clone",
      desc: "A Netflix Clone built with HTML, CSS, and JavaScript, featuring a responsive UI that mimics the Netflix homepage with movie cards, navigation, and hover effects.",
      align: "right",
      image: netflixImg,
      link: "https://github.com/Suryansharma18/Bharat-Intern/tree/main/Netflix",
    },
    {
      name: "Blogify",
      desc: "Blogify is a dynamic blogging platform that allows users to create, edit, and share blog posts seamlessly.",
      align: "left",
      image: blogifyImg,
      link: "https://github.com/Suryansharma18/Blogify",
    },
  ];


const ProjectsMain = () => {
  return (
    <div  id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div  variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0}}>
<ProjectsText/>
      </motion.div>
      
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              desc={project.desc}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
