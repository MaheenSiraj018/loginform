import React from "react";
import Button from "../components/Button";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home =() =>{
    const { name } = useParams();
    const navigate = useNavigate();
    const logout=()=>{
        navigate('/');
        
    }
    return(
        <div className="header-main">
            <h1 className="home-header">Welcome to HomePage! {name}</h1>
            <Button name="Logout Account" onClick={logout}/>
        </div>
    )
}
export default Home;