import React from 'react'
import PortfolioPic from '../Assets/Christian.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const About = () => {

 
  return (

    <div id="main">
 
      <img 
      className="w-full h-screen object-cover object-left" 
      src={PortfolioPic} 
      alt="Me"
      >
      </img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='flex sm:text-5xl text-4xl font-bold text-gray-800'>I'm Christian Darlington</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          {' '}
          I'm a
          <TypeAnimation
            sequence={[
              'Developer', // Types 'One'
              2000, // Waits 1s
              'Coder', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
          />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href='https://www.linkedin.com/in/christian-darlington/'>
          <FaLinkedinIn className="cursor-pointer" size={20} />
          </a>
          <a href='https://github.com/ChristianDarlington'>
          <FaGithub className="cursor-pointer" size={20} />
          </a>
          <a href='https://twitter.com/ChristianD78787'>
          <FaTwitter className="cursor-pointer" size={20} />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
