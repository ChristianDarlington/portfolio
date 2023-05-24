import React from 'react'
import TravelBuddy from '../Assets/TravelBuddy.png'
import TrendingMovie from '../Assets/TrendingMovie.png'
import ScoreApp from '../Assets/ScoreApp.png'
import ScreenShotOne from '../Assets/Screen Shot 2023-05-22 at 1.23.53 PM.png'
import ScreenShotTwo from '../Assets/Screen Shot 2023-05-22 at 1.24.02 PM.png'
import ProjectItem from './ProjectItem'


const Content = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Est exercitation laborum mollit id pariatur sint irure Lorem eiusmod labore. 
        Elit est fugiat ad incididunt. Ad aute pariatur nisi ad id nulla ex pariatur reprehenderit.   
        Adipisicing amet labore sit fugiat et. Do aute culpa sunt pariatur sint occaecat ullamco laborum 
        elit aliqua occaecat culpa.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={TravelBuddy} title='Travel Buddy'/>
          <ProjectItem img={TrendingMovie} title='Trending Entertainment'/>
          <ProjectItem img={ScoreApp} title='Game Scoring'/>
          <ProjectItem img={ScreenShotOne} title='Shop Landing Page'/>
        </div>
    </div>
  )
}

export default Content
