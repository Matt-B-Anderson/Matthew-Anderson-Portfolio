import React from 'react'
import Navbar from './Navbar'

export default function Intro() {

    return (
        <header>
            <Navbar />
            <div id='intro'>

                <div className='intro-container'>
                    <h1 className='my-name'>Matthew Anderson</h1>
                    <hr />
                    <h3>Passionate about safely connecting people through webpages</h3>
                    <div className='personal-links'>
                        <ul>
                            <li>
                                <a href="https://github.com/Matt-B-Anderson">GITHUB</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mattandersonthedev/">LINKEDIN</a>
                            </li>
                            <li>
                                <a href="">RESUME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}