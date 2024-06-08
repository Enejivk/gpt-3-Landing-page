import React from 'react'
import { Navbar, Hero, Partners, Possibility, GetStarted } from './components'
import { WhatIsGPT, Future, Blog, Footer } from './containers'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <WhatIsGPT />
      <Future />
      <Possibility />
      <GetStarted />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
