import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Swal, { SweetAlertResult } from 'sweetalert2';

function Layout() {
  function NavigateToAdmin() {
    Swal.fire({
      title: "Enter Admin Key",
      input: "text",
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Hi, Admin",
      allowOutsideClick: false,
    }).then(async(result: SweetAlertResult<string | undefined>) => {
      const inputValue = result.value?.toUpperCase()
      console.log(inputValue);
      
      const res = await fetch(`http://localhost:5000/user/adminValidate`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          adminKey: inputValue
        })
      })

      if (res.status === 200) {
        window.location.href = `/adminPage/${inputValue}`
      }
    })
  }
  return (
    <div>
        <nav className='flex flex-row justify-start p-3 w-full fixed top-0 backdrop-blur-sm'>
          <Link to="/" className='text-center text-lg text-[#001D3D] mx-3 p-2 tracking-wide font-medium rounded-lg bg-text'>Home</Link>
          <Link to="/createPost" className='text-center text-lg text-text mx-3 p-2 tracking-wide font-medium '>Post</Link>
          <Link to="#" onClick={NavigateToAdmin} className='text-center text-lg text-text mx-3 p-2 tracking-wide font-medium '>Admin</Link>
          <Link to="/about" className='text-center text-lg text-text mx-3 p-2 tracking-wide font-medium '>About</Link>
          <Link to="/login" className='text-center text-lg text-text mx-3 p-2 tracking-wide font-medium '>Login</Link>
        </nav>
        <Outlet />
        <footer className="bg-background text-white py-7 px-5 flex flex-wrap justify-between items-center relative bottom-0 w-full">
          <div className="text-center font-medium text-lg text-text">
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