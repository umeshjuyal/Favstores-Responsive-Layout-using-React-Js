import React from "react";
import "./navbar.css";
// import '/node_modules/primeflex/primeflex.css';
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} 
   from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                {/* 1 logo part */}
                <div className='Logo'>
                    <h2>
                        <span>F</span>ashion
                        <span>C</span>lothing
                    </h2>
                </div>

                {/* 2 LOGO Part */}
                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='#'>Home </a>
                        </li>
                        <li>
                            <a href='#'>About </a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>

                {/* 3rd Social Media link */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>

                        <li>
                            <a href='https://portotheme.com/html/molla/index-9.html#'
                                target="_fashion boys">
                                <FaFacebookSquare className='facebook' />
                            </a>
                        </li>

                        <li>
                            <a href='https://www.youtube.com/watch?v=-jGSNFt-6Ic'
                                target="_fashion boys">
                                <FaInstagramSquare className='instagram' />
                            </a>
                        </li>

                        <li>
                            <a href='https://www.youtube.com/watch?v=-jGSNFt-6Ic'
                                target="_fashion boys">
                                <FaYoutubeSquare className='youtube' />
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            
        </>
    );
}
export  default Navbar;
