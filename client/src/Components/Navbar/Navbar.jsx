import React from 'react'
import './Navbar.css'
import { MdTravelExplore } from "react-icons/md";
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

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
                <ul className="navLists flex">
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

                    <button className='btn'>
                        <a>BOOK NOW !</a> 
                    </button>
                </ul>
            </div>

            <div className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
            </div>

            <div className="toggleNavBar">
                <TbGridDots className="icon"/>
            </div>

        </header>
    </section>
  )
}

export default Navbar