import './App.css';
import Landing from './Components/Landing/Landing';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <Home />
      <Nav />
      <Projects />
      <Nav />
      <Contact />
    </div>
  );
}

export default App;
