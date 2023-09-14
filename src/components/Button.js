import React from "react";
import './Button.css';

const handlesubmit=()=>{

}

const Button=({name})=>{
    return(
        <button type="submit" className="btn" onClick={handlesubmit}>{name}</button>
    )
}

export default Button;