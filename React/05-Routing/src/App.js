import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Navbar} from './Component/NavBar/Navbar'

import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";

function App() {
  const { theme } = useContext(ThemeContext)
  return <div>
    <ThemeProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
        {console.log('theme', theme)}
      </BrowserRouter>
    </ThemeProvider>
  </div>;
}

export default App;
