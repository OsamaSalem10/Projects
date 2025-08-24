import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
       <ToastContainer theme="dark"/>
      <div id={"Home"}>
        <Navbar />
      </div>
      <div id={"About"}>
        <About />
      </div>
      <div id={"Projects"}>
        <Projects />
      </div>
      <div id={"Services"}>
        <Services />
      </div>
      <div id={"Education"}>
        <Education />
      </div>
      <div id={"Skills"}>
        <Skills />
      </div>
      <div id={"Contact"}>
        <Contact />
      </div>
      <div id={"Footer"}>
        <Footer />
      </div>
  
    </div>
  );
}

export default App;
