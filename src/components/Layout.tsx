import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Layout() {
  return (
    <div>
        <nav className='flex flex-row justify-start bg-[#001D3D] p-3 w-full fixed'>
          <Link to="/" className='text-center text-lg text-[#001D3D] mx-3 p-2 tracking-wide font-medium rounded-lg bg-[#FFC300]'>Home</Link>
          <Link to="/createPost" className='text-center text-lg text-[#FFC300] mx-3 p-2 tracking-wide font-medium '>Post</Link>
          <Link to="/adminPage" className='text-center text-lg text-[#FFC300] mx-3 p-2 tracking-wide font-medium '>Admin</Link>
          <Link to="/about" className='text-center text-lg text-[#FFC300] mx-3 p-2 tracking-wide font-medium '>About</Link>
        </nav>
        <Outlet />
        <footer className="bg-primary text-white py-7 px-5 flex flex-wrap justify-between items-center">
          <div className="text-center">
            &copy; {new Date().getFullYear()} EarthStrix
          </div>
          <nav className="space-x-4">
            <a className='text-2xl' href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className='text-2xl' href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='text-2xl' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </nav>
        </footer>
    </div>
  )
}

export default Layout