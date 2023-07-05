import Main from './Components/Main'
import Sidebar from './Components/Sidebar';
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact';
import Skills from './Components/Skills';


function App() {


  return (
    <div className="App">
     <Main />
      <Sidebar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
