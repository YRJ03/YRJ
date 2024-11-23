import './css_file/Menu.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

export default function Menu() {
  return (
    <div className="menu-container">
      <BrowserRouter>
      <div className='box'>
        <nav className="navbar">
            <NavLink to="/" className="navbar-link" activeclassname="active">Home</NavLink>
            <NavLink to="/about" className="navbar-link" activeclassname="active">About</NavLink>
            <NavLink to="/skills" className="navbar-link" activeclassname="active">Skills</NavLink>
            <NavLink to="/projects" className="navbar-link" activeclassname="active">Projects</NavLink>
            <NavLink to="/contact" className="navbar-link" activeclassname="active">Contact</NavLink>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
