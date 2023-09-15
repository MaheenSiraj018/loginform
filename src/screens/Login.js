import React,{useEffect,useState} from "react";
import Button from '../components/Button';
import Input from '../components/Input.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
      const navigate = useNavigate();

    const emailvalidator=(email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    useEffect(() => {
        var emailchecker = document.getElementById('emailcheck');
        if(email===""){
            emailchecker.textContent="";
        }
        else{
        const isValidEmail = emailvalidator(email); 
        if (isValidEmail) { 
          emailchecker.textContent = "";
        } else {
          emailchecker.textContent = "Please enter email in the correct format";
          emailchecker.style.color = "red";
        }
    }
      }, [email]);

      const handlesubmit = (e) => {
        e.preventDefault();
        const ValidEmail = emailvalidator(email); 
      
        const users = JSON.parse(localStorage.getItem('users'));
        const authenticatedUser = users.find((user) => user.email === email && user.password === password);
      
        if (password === "" || !ValidEmail ) {
          document.getElementById('error').textContent = "Please enter all the data first";
          return;
        } 
        else if(!authenticatedUser){
          document.getElementById('error').textContent = "Email & Password doesn't match.";
          return;
        }
        else {
          document.getElementById('error').textContent = "";
          const name = authenticatedUser.firstName; // Access the name property directly
          navigate(`/Home/${name}`);
        }
      }
      

    return (
        <div className="maindiv">
            <h3 className="header">Login to Your Account!</h3>
            <form className="main" onSubmit={handlesubmit}>
            <Input type="email" placeholder="Enter your Email Address" onChange={(e) =>
             {setEmail(e.target.value);}}/>
            <p id="emailcheck"></p>
            <Input type="password" placeholder="Enter Password" onChange={(e) =>
             {setPassword(e.target.value);}}/>
            <Button name="Login" />
            <p id="error"></p>
            </form>
        </div>
    )
}
export default Login;