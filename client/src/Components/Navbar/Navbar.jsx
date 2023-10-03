import React from 'react'
import './Navbar.css'
import { MdTravelExplore } from "react-icons/md";


const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><MdTravelExplore className='icon' />
                        Travel.
                    </h1>
                </a>
            </div> 

            <div className='navBar'>
                <ul className="navLists grid">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contacts</a>
                    </li>

                </ul>
            </div>

        </header>
    </section>
  )
}

export default Navbar