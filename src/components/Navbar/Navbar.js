import React from 'react';
import '../Navbar/Navbar.scss';
import logo from '../../sources/logo.png';

export default function Navbar() {
    return  <nav className="my-navbar">
        <img className="image-logo" src={logo} alt="air doctor tournament" />
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link active">
                    participant list
                </a>
            </li>

            <li>
                <a href="/" className="nav-link">
                    tournament ping-pong
                </a>
            </li>
            
        </ul>
    </nav>;
    }
