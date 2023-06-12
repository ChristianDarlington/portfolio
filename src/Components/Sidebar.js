import React, { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'




const Sidebar = () => {
 

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) { // Adjust the threshold to your desired breakpoint
  //       setNav(false);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div>


<div>
      <FiMenu 
     onClick={handleNav} 
     className="absolute top-4 right-4 md:hidden" 
     /> 
 
  {nav ? (
  
        <div className="absolute inset-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center ">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineInfoCircle size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      
        ) : (
          <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in cursor-pointer duration-300">
              <AiOutlineHome size={20} />
            </a>
            <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in cursor-pointer duration-300">
              <AiOutlineInfoCircle size={20} />
            </a>
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in cursor-pointer duration-300"
            >
              <AiOutlineProject size={20} />
            </a>
            <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in cursor-pointer duration-300">
              <BsPerson size={20} />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in cursor-pointer duration-300"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
          </div> 
          )}
  
        </div>

     

    </div>
  )
}

export default Sidebar
