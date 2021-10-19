import React from 'react'
import linkedin from './Images/linkedin (3).png'
import './App.css'

 const Footer = () => {
    return (
        <div id='footer'>
            <img id='footer-linkedin' src={linkedin} alt='linkedIn'/>
            <a id='bryant'href='https://www.linkedin.com/in/bryant-wenzel-80354039'>Bryant Wenzel</a>
        </div>
    )
}
export default Footer
