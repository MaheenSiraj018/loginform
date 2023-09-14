import React,{useEffect, useState} from "react";
import Button from '../components/Button';
import Input from '../components/Input.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup =() => {
    const [email,setEmail]=useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        password: "",
      });
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
        console.log(ValidEmail);
        let hasValidationError = false;
        for (const key in formData) {
            if (!formData[key]) {
              hasValidationError = true;
              break; 
            }
          }
          const password=formData.password;
          if (!password) {
            // document.getElementById('passwordError').textContent = "Password must be at least 8 characters long";
            hasValidationError = true;
          }
            if (hasValidationError || !ValidEmail) {
              document.getElementById('error').textContent="Please enter all the data correctly";
              return;
            }
            else{
                document.getElementById('error').textContent="";
                navigate('/Home');
            }
          
          console.log("Form Submitted Successfully");
    }


    console.log("Email ",email);
    return(
        <div className="maindiv">
        <h3 className="header">Ready to Create your Account?</h3>
        <form className="main" onSubmit={handlesubmit}>
        <Input type="text" placeholder="Enter your First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}/>
        <Input type="text" placeholder="Enter your Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}/>
        <Input type="number" placeholder="Enter your Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} min="0" max="100"/>
        <Input type="email" placeholder="Enter your Email Address" onChange={(e) =>
             {setEmail(e.target.value);}}/>
        <p id="emailcheck"></p>
        <Input type="password" placeholder="Enter Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
        <Button name="Create Account"/>
        <p id="noacc">Don't have an account?</p>
        <Link to='/login' id="link">Login</Link>
        <p id="error"></p>
        </form>
        </div>
    )
}
export default Signup;