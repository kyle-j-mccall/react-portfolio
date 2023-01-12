import './App.css';
import Landing from './Components/Landing/Landing';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
