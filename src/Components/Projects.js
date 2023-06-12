import React from 'react'
import BettingApp from '../Assets/BettingApp.png'
import TrendingMovie from '../Assets/TrendingMovie.png'
import ScoreApp from '../Assets/ScoreApp.png'
import ScreenShotOne from '../Assets/Screen Shot 2023-05-22 at 1.23.53 PM.png'
import ScreenShotTwo from '../Assets/Screen Shot 2023-05-22 at 1.24.02 PM.png'


const Content = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8 text-lg text-[#001b5e]">
      In my project section, I have highlighted my experience with React.js, 
      a widely used JavaScript library for building interactive user interfaces. 
      These projects demonstrate my ability to develop responsive and visually appealing 
      interfaces while effectively utilizing React's features and best practices.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={BettingApp} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Baller Bet</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <a href="https://github.com/ChristianDarlington/sports-betting" target='_blank' rel='noreferrer'>
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">Github</p>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={TrendingMovie} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Daily Entertainment</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <a href="https://github.com/ChristianDarlington/trending-movies-app" target='_blank' rel='noreferrer'>
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">Github</p>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={ScoreApp} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Score App</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <a href="https://github.com/ChristianDarlington/react-score-app" target='_blank' rel='noreferrer'>
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">Github</p>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <img src={ScreenShotOne} alt="" className="rounded-xl group-hover:opacity-10" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">Grammerhub Projects</h3>

            <p className="pb-4 pt-2 text-white text-center">React Js</p>

            <a href="https://github.com/grammerjam/te-main" target='_blank' rel='noreferrer'>
              <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
