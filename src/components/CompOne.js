import React from "react"
import ReactDOM from "react-dom"
import {useNavigate} from "react-router-dom";
import lesson1 from "./lesson1"

export default function MainOne(){
    
    const navigate = useNavigate();
    return(
    
        <>
            <button className="btn1" >button 1</button>
            <button className="ntn2">button2</button>
            <button className = "f" onClick={()=>navigate('lesson1')}> first class</button>
        </>
    )
}