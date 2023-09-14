import React from "react";
import './Input.css';

const Input = ({type,placeholder,onChange=null,min=0,max=100}) => {
    return(
        
        <input type={type} className='input' placeholder={placeholder} onChange={onChange} min={min} max={max}/>
        
    )
}
export default Input;