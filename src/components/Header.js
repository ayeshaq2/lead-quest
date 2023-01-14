import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import Button from './Button1'
import logo from './images/airbnb.png'

export default function Header(){
 

    return(
        <div>
            <span><img src={logo}></img>
            <h5 className='header'>question goes here</h5></span>

        </div>
    )


}