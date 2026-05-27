import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="bg-gray-100 min-h-screen" >
        <Navbar title="AI Learning Dashboard" subtitle=""/>
        <div className="flex">
            <Sidebar/>
            <Dashboard/>
        </div>
    </div>
  )
}

export default App
