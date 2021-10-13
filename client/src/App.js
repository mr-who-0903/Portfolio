import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
