"use client"
import Image from 'next/image'
import { Link } from "react-scroll";
import React, { useState } from 'react'
// import Button from './Button';
import { FiX,FiMenu } from 'react-icons/fi'

import{FiGithub,FiLinkedin} from 'react-icons/fi'
const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <header className='w-full  px-2 py-2 bg-white shadow-lg shadow-cyan-500 fixed top-0 z-50 '>
        <nav className='flex justify-between items-center'>
        <Image src="/logo.png" alt='logo' width={144} height={30}/>
              <div className=' hidden md:flex  items-center gap-5 text-black ml-auto cursor-pointer'>
              <Link to="about" smooth={true} duration={500}><span className='text-cyan-500'>01.</span> About </Link> 
              <Link to="experience" smooth={true} duration={500}><span className='text-cyan-500'>02.</span> Experience </Link> 
              <Link to="contact" smooth={true} duration={500} ><span className='text-cyan-500'>03.</span> Contact </Link> 
              <button className=' px-2 py-2 border  border-cyan-500 items-center hover:bg-cyan-500 hover:text-white rounded-xl flex-shrink-0'><a href='https://drive.google.com/file/d/1JTdrB1Ja0kZ2rWel74CbuIgxCLouCq_G/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a></button>
             {/* <Button/> */}
            </div>
          
          
             {/* fileMenu for Mobile */}
          <button className='text-black text-2xl md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?<FiX/>:<FiMenu/>}</button>        
        </nav>    
      {
        menuOpen&&(<div className='flex flex-col gap-5  px-6 text-black md:hidden '>
         <Link to="about" smooth={true} duration={300} ><span className='text-cyan-500'>01.</span> About </Link> 
              <Link to="experience" smooth={true} duration={300}><span className='text-cyan-500'>02.</span> Experience </Link> 
              <Link to="contact" smooth={true} duration={300}><span className='text-cyan-500'>03.</span> Contact </Link> 
             <div className='flex-grow-0'>
             <button className=' px-2 py-2 border rounded-xl hover:bg-cyan-500 hover:text-white  border-cyan-500'><a href='https://drive.google.com/file/d/1JTdrB1Ja0kZ2rWel74CbuIgxCLouCq_G/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a></button>
             
             </div>
             {/* <Button/> */}
            <div className='flex gap-3 '>
            <a href="https://github.com/TahaRehmanMalik"><FiGithub className="text-2xl"/></a>
            <a href="https://www.linkedin.com/in/taha-rehman-061131249/"><FiLinkedin className="text-2xl"/></a>
            </div>
        </div>
        )
      }
    </header>
  )
}

export default Navbar
