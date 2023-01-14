import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import Button from './Button1'
import logo from './images/logo2.png'


export default function Header(){
    return(
        <nav className='navbar'>
            <span><img src={logo} className="header--image"></img></span>
            <h5 className='header'>question goes here</h5>

        </nav>
    )


}