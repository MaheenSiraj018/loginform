import React from "react";
import './Button.css';

const Button=({name,onClick=null})=>{
    return(
        <button type="submit" className="btn" onClick={onClick} >{name}</button>
    )
}

export default Button;