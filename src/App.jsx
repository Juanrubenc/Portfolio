import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Nav />
    <Main />
    <Skills />
    <Projects />
    <Footer />
  </>
  )
}

export default App
