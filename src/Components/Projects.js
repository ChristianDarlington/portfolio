import React from 'react'
import BettingApp from '../Assets/BettingApp.png'
import TrendingMovie from '../Assets/TrendingMovie.png'
import ScoreApp from '../Assets/ScoreApp.png'
import Foresight from '../Assets/Foresight.png'



const Content = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-24">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] tracking-widest">Projects</h1>
      <p className="text-center py-8 text-lg text-[#001b5e]">
      In my project section, I have highlighted my experience with React.js, 
      a widely used JavaScript library for building interactive user interfaces. 
      These projects demonstrate my ability to develop responsive and visually appealing 
      interfaces while effectively utilizing React's features and best practices.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={Foresight} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">SkillForesight</h3>
        
            <p className="pb-4 pt-2 text-white text-center">React Js</p>

        <div className='flex space-x-4 pl-4'>
            <a href="https://admirable-pothos-436a51.netlify.app/" target='_blank' rel='noreferrer'>
              <p className=" p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Demo</p>
            </a>
            <a href="https://github.com/ChristianDarlington/career-finder" target='_blank' rel='noreferrer'>
              <p className="p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Github</p>
            </a>
        </div>

          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={TrendingMovie} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Daily Entertainment</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <div className='flex space-x-4 items-center justify-center'>
            <a href="https://resplendent-cascaron-42edb6.netlify.app/" target='_blank' rel='noreferrer'>
              <p className=" p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Demo</p>
            </a>
            <a href="https://github.com/ChristianDarlington/trending-movies-app" target='_blank' rel='noreferrer'>
              <p className="p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Github</p>
            </a>
        </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={BettingApp} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Baller Bet</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <div className='flex space-x-4'>
            <a href="https://moonlit-malasada-dec0fa.netlify.app/" target='_blank' rel='noreferrer'>
              <p className="p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Demo</p>
            </a>
            <a href="https://github.com/ChristianDarlington/sports-betting" target='_blank' rel='noreferrer'>
              <p className=" p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Github</p>
            </a>
        </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={ScoreApp} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Scoreboard</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <div className='flex space-x-4'>
            <a href="https://scoreboardpoints.netlify.app/" target='_blank' rel='noreferrer'>
              <p className="p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Demo</p>
            </a>
            <a href="https://github.com/ChristianDarlington/react-score-app" target='_blank' rel='noreferrer'>
              <p className=" p-2 rounded-lg bg-white text-gray-800 font-bold cursor-pointer">Github</p>
            </a>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Content
