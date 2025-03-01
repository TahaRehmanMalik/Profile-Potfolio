"use client"
import React,{useState} from 'react'

const data = {
  TeamsevenSolutions: {
    title: "Frontend Developer @ Teamseven Solutions",
    duration: "December 2024 - Present",
    points: [
      "Developing and optimizing the frontend of a client-based SaaS application using Angular, ensuring a smooth and intuitive user experience.",
"Translating client requirements into functional and visually appealing UI components while maintaining performance and scalability",
"Collaborating with the design and development teams to implement solutions that address client needs and improve overall software usability"
    ],
  },
    MAGMA3C: {
      title: "MERN Stack Developer @ MAGMA3C",
      duration: "March 2024 - August 2024",
      points: [
        "Developed full-stack web applications using Firebase, ExpressJS, ReactJS, and NodeJS.",
        "Gained experience in database management, API development, server-side scripting, and frontend development using React.",
        "Contributed to the development of scalable and robust web applications.",
      ],
    },
   
  };
const Experience = () => {
    type TabKey=keyof typeof data;
    const [activateTab,setActivateTab]= useState<TabKey>("TeamsevenSolutions");
  return (
    <section id='experience' className="w-full flex flex-col mx-auto gap-4 px-4 pt-28 pb-20 md:w-3/4 bg-white text-black">
<h3 className="text-xl text-gray-500"><span className="text-cyan-500">02.</span>Where I have Worked</h3>
<div className="flex flex-col md:flex-row  gap-8">
<div className="w-full md:w-1/4 flex flex-col space-y-2">
    {
        Object.keys(data).map((key)=>(
            <div key={key} className={`cursor-pointer p-2 transition-all duration-300 ease-in-out w-max ${activateTab===key?'bg-cyan-500 text-white':'bg-white text-gray-500'} `}onClick={()=>setActivateTab(key as TabKey)}>{key}</div>
        ))
    } 
  </div>
    
  <div className="w-full md:w-3/4 flex flex-col">
    <h4 className="text-lg md:text-xl font-bold text-cyan-500">{data[activateTab].title}</h4>
    <p className="text-gray-500">{data[activateTab].duration}</p>
   <ul className=" mt-3 space-y-2">
    {
        data[activateTab].points.map((point,index)=>(
            <li key={index} className="flex items-center"> 
            <span className="text-cyan-500">▹</span><span className="pl-2">{point}</span>
             </li>
        ))
    }
    
    
   </ul>
  </div>

</div>
</section>
  )
}

export default Experience
