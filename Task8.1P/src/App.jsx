import React, { useState } from 'react'
import './App.css'
import Menu from './components/menu/menu'
import banner from './assets/banner.jpg'
import Expert from './components/expert/expert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu></Menu>
      <img className="banner" src={banner} alt="" />
      <Expert></Expert>
      <div className="footer">Copyright © 2021 Powered by React</div>
    </div>
  )
}

export default App
