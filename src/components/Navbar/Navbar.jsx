import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix.jpg'
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import smily from "../../assets/smily.jpg"
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      {/* Left side - Logo and Menu */}
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      {/* Right side - Icons, profile, and dropdown */}
      <div className="navbar-right">
        <CiSearch className='icons' />
        <p>Children</p>
        <FaBell className='icons' />
        <div className='navbar-profile'>
          <CgProfile className='profile' />
          <img src={smily} alt="Profile Smily" className='smily' />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
