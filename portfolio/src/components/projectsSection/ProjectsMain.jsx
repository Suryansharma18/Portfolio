import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
      name: "Vacation of Africa",
      desc: " w cjanv oavnaen OVIAJNVIOw wei c uhc cuehc c uheucacnue ewslv",
      align: "right",
      image: "../../public/images/website-img-1.jpg",
      link: "#",
    },
    {
      name: "Moola App",
      desc: "afsznqieajfiovnoinv huUHAGUHAZUIHVDJVNA9UGH EURAFAHU FIgnJW IOEFJ",
      align: "left",
      image: "../../public/images/website-img-2.webp",
      link: "#",
    },
    {
      name: "Tourzania",
      desc: "dawjbef uqicj  uhvioejef cownicwjcaierj    i fenfowjai vaehfo  qnoivejf",
      align: "right",
      image: "../../public/images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "Bank of Luck",
      desc: "efwu vbiqcun cnewof hac oijq3if eui hef jwd  fh    iv wdn isuacniua h V R",
      align: "left",
      image: "../../public/images/website-img-4.jpg",
      link: "#",
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
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
