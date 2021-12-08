import logo from './logo.svg';
import './App.css';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css'   //theme
import 'primereact/resources/primereact.min.css'                 //core css
import 'primeicons/primeicons.css'                              //icons

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Projects from './Projects';
import About from './About';


function App() {

  const items = [
    {
      label: "About Me",
      icon: 'user',
      url: "/"

    },
    {
      label: "Projects",
      icon: 'pi pi-fw pi-code',
      url: "projects"
    },
    {
      label: "My Resume",
      icon: 'pi pi-fw pi-file-pdf',
    },
   
  ]


  const socials = (
    <div className="socials-container">
      <a href="mailto:abrar9597@gmail.com"><Button badgeClassName="social-button" label="abrar9597@gmail.com" icon="pi pi-envelope" className=" p-button-outlined" href="mailto:abrar9597@gmail.com" /></a>
      <a href="https://www.linkedin.com/in/abrar-fahim-001/">
        <Button className="social-button" icon="pi pi-linkedin" className="p-button-outlined" />
      </a>
      <a href="https://github.com/abrar-fahim">
        <Button className="social-button" icon="pi pi-github" className="p-button-outlined" />

      </a>
      <a href="https://twitter.com/brarfahim">
        <Button className="social-button" icon="pi pi-twitter" className=" p-button-outlined" />
      </a>


    </div>
  )
  return (
    <Router>
      <div className="top-fixed">

        <Menubar model={items} end={socials} />

      </div>

      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
