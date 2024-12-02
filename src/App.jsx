import { useState } from 'react'
import Home from './components/Home'
import { FaWhatsapp } from 'react-icons/fa'

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll">
      <div className="sticky top-3/4 left-full p-4 bg-green-500 w-min h-min rounded-full shadow-2xl shadow-black z-20 mr-7">
        <FaWhatsapp className="w-10 h-10 text-white" />
      </div>
      <Home className='z-0' />
    </div>
  )
}

export default App
