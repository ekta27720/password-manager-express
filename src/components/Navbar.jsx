import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-5 h-14 py-1">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/*
        <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>
        */}
        <button className='github bg-green-600 rounded-full flex gap-2 justify-between items-center px-2 ring-white ring-1'>
          <img className="invert py-1" src="icons/github.svg" alt="github logo" />
          <span className='font-bold '>Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
