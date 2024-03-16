import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav className='flex flex-row justify-end bg-slate-800 p-3 w-full'>
            <Link to="/" className='text-center text-lg text-indigo-950 mx-3 p-2 tracking-wide font-medium bg-yellow-300'>Home</Link>
            <Link to="/post" className='text-center text-lg text-yellow-200 mx-3 p-2 tracking-wide font-medium '>Post</Link>
            <Link to="/about" className='text-center text-lg text-yellow-200 mx-3 p-2 tracking-wide font-medium '>About</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout