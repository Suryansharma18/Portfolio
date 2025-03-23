import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
     <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
     <p className='text-white'>Hi, I'm Suryansh Sharma, a passionate full-stack developer currently pursuing B.Tech in Computer Science at ABES Engineering College. I specialize in MERN stack development and love building scalable web applications.

With hands-on experience in Node.js, Express.js, MongoDB, React, and RESTful APIs, I have worked on projects like Wanderlust (an Airbnb-like platform) and a Quora-like discussion forum.

I actively participate in hackathons, coding competitions, and tech events, constantly challenging myself to learn and grow. Whether it's crafting efficient backend architectures, designing intuitive UI/UX, or optimizing database performance, I thrive on solving real-world problems with code.</p>


<button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default AboutMeText
