import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import 'normalize.css'
import './styles/loading.css'
import './styles/Menu.css'
import './styles/Home.css'
import './styles/AboutMe.css'
import './styles/skills.css'
import './styles/Portfolio.css'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skill from './pages/Skill'
import Portfolio from './pages/Portfolio'
import Menu from './components/Menu'

import 'aos/dist/aos.css'


function App() {

  return (
    <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route>
          <Route path='/skill' element={<Skill/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </HashRouter>
  )
}

export default App
