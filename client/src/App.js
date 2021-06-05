import { React } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import './App.css';

function App() {
  const setScroll = {scroll : true};
  //const [scroll, setScroll] = useState(true);

  const scrollHome = () => {
    window.scrollTo({top : 0, behavior : 'smooth'});
  }

  const scrollAbout = () => {
    window.scrollTo({top : 550, behavior : 'smooth'});
  };

  const scrollProject = () => {
    window.scrollTo({top : 1800, behavior : 'smooth'});
  };

  const scrollContact = () => {
    window.scrollTo({top : 10000, behavior : 'smooth'});
  };

  window.addEventListener('scroll', setScroll);

  return (
    <div className="wrapper">
      <Router>
        <div className="nav-bar">
          <Link to="/" onClick={scrollHome}> Home </Link>
          <Link to="/about" onClick={scrollAbout}> About </Link>
          <Link to="/projects" onClick={scrollProject}> Projects </Link>
          <Link to="/contact" onClick={scrollContact}> Contact </Link>
        </div>
      </Router>

      <div className="elements"> 
        <Home className="home" />
        <About className="about" />
        <Projects className="projects" />
        <Contact className="contact" />
      </div>
    </div>
  );
}

export default App;
