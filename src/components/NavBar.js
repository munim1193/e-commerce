import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import scart from '../assets/scart.svg'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <div className='burger-menu' onClick={toggleMenu}>
                <FaBars />
            </div>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className={`items ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Products</Link>
                <Link to="/trackorder" onClick={() => setIsOpen(false)}>Track Order</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </div>
            <div className='mobilecart'>
                <img src={scart} alt='scart'/>
            </div>
        </div>
    );
};

export default NavBar;
