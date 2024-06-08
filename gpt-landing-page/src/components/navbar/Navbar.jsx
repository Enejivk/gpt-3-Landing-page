import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { FiAlignRight } from "react-icons/fi";

import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#what_is_gpt">What is GPT</a></p>
        <p><a href="#story">Open Ai</a></p>
        <p><a href="#posibility">Case Study</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)
const Sign = () => (
    <>
        <p><a href="">sign up</a></p>
        <button>sign</button>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="navbar-container">
            <div className="logo-navbar-links">
                <div className="logo">
                    <img src={logo} alt="Gp3-logo" />
                </div>
                <div className="navbar-link">
                    <Menu />
                </div>
            </div>
            <div className="nav-link-sign">
                <Sign />
                {toggleMenu ?
                    <GrClose color='#fff' size={30} onClick={() => { setToggleMenu(!toggleMenu) }} />
                    : <FiAlignRight color='#fff' size={30} onClick={() => { setToggleMenu(!toggleMenu) }} />}
            </div>
            
            {toggleMenu && 
            <div className='navbar-menu-container'>
                <Menu/>
                <Sign/>
            </div>
            }
        </div>
    )
}

export default Navbar
