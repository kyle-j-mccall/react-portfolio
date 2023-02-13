import './App.css';
import { useRef } from 'react';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);

  return (
    <div className="App">
      <Home home={home} />
      <Nav home={home} about={about} projects={projects} contact={contact} />
      <About about={about} />
      <Nav home={home} about={about} projects={projects} contact={contact} />
      <Projects projects={projects} />
      <Nav home={home} about={about} projects={projects} contact={contact} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
