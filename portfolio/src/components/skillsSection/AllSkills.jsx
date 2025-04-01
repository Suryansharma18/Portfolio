import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaNodeJs } from "react-icons/fa";  // Node.js Icon
import { SiExpress } from "react-icons/si"; // Express.js Icon
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"; 
import React from "react";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Express.js",
    icon: SiExpress,

  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  
 
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
             >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
             </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;