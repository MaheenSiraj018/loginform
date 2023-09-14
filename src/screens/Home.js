import React from "react";
import Button from "../components/Button";
import { useParams } from 'react-router-dom';

const Home =() =>{
    const { name } = useParams();
    return(
        <div>
            <h1 className="home-header">Welcome to HomePage! {name}</h1>
            <Button name="Logout Account"/>
        </div>
    )
}
export default Home;