import React from 'react'


export default function Navbar() {

    return (
        <nav className='navbar'>
            <ul className='nav-btns'>
                <li>
                    <a href="#intro">Home</a>

                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    )
}