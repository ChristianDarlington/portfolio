const About = () => {
  return (
    <div id='about' className='w-full h-screen  text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#001b5e]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Christian Darlington, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p> I'm a junior software developer with experience in React.js. I have a strong passion for creating intuitive and efficient user
              interfaces. My expertise lies in developing scalable and maintainable web applications using React.js and its ecosystem. With a solid
              understanding of JavaScript, HTML, and CSS, I am adept at building responsive and interactive UI components. I am eager to contribute to
              dynamic development teams and continue expanding my skills in front-end development.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};



export default About
