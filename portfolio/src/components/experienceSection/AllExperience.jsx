import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer",
    company: "Freelance",
    date: "2024 - Present",
    responsibilities: [
      "Developed and deployed scalable web applications using React.js, Node.js, and MongoDB.",
      "Built Wanderlust, a full-stack property listing platform.",
      "Implemented secure authentication and user management systems.",
      "Designed REST APIs for seamless backend integration.",
    ],
  },
  {
    job: "Data Analyst",
    company: "Self-Driven Projects",
    date: "2023 - Present",
    responsibilities: [
      "Conducted Diwali Sales Data Analysis using Pandas, NumPy, and Matplotlib to identify trends and insights.",
      "Worked on data visualization and exploratory data analysis (EDA) to interpret large datasets.",
      "Applied statistical techniques to analyze data and generate meaningful reports.",
    ],
  },
  {
    job: "Web Development Intern",
    company: "Bharat Intern",
    date: "2023 - Present",
    responsibilities: [
      "Developed responsive and dynamic web applications using HTML, CSS, JavaScript, and React.js.",
      "Gained hands-on experience in frontend development, UI/UX design, and API integration.",
      "Worked on real-world projects, improving skills in debugging, performance optimization, and scalability.",
    ],
  },
  {
    job: "Coding and Competitive Programmer",
    company: "Codechef and Leetcode",
    date: "2025 - Present",
    responsibilities: [
      
      "Actively participating in hackathons and coding competitions to sharpen problem-solving skills and collaborate on innovative projects.",
      "Guiding aspiring developers in DSA, Web Development, and Data Analysis through mentorship and knowledge sharing.",
      
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {/* {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              > 
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )} */}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;