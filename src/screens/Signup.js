import React, { useEffect, useState } from "react";
import Button from '../components/Button';
import Input from '../components/Input.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const getusers = () => {
    const users = localStorage.getItem('users');
    if (users) {
      var parseusers = JSON.parse(users);
      // console.log("Users retrieved");
      return parseusers;
    }
    else {
      return [];
    }
  }

  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const emailvalidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    var emailchecker = document.getElementById('emailcheck');
    if (email === "") {
      emailchecker.textContent = "";
    }
    else {
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
    let hasValidationError = false;
    for (const key in formData) {
      if (!formData[key]) {
        hasValidationError = true;
        break;
      }
    }
  
    if (hasValidationError || !ValidEmail) {
      document.getElementById('error').textContent = "Please enter all the data correctly";
      return;
    } 
    else {
      const name = formData.firstName;
      
      let existingUsers = getusers();
      console.log("Existing Users in Local Storage",existingUsers); 
  
      // Ensure existingUsers is an array
      if (!Array.isArray(existingUsers)) {
        existingUsers = [existingUsers]; 
      }
      
      console.log('array of objects',existingUsers); 
  
      
      const isEmailAlreadyRegistered = existingUsers.some((user) => user.email === email);
      console.log("User email already registered",isEmailAlreadyRegistered);
  
      if (isEmailAlreadyRegistered) {
        document.getElementById('error').textContent = "Your email is already registered";
        console.log("Email is already registered");
      } 
      else {
        document.getElementById('error').textContent = "";
        existingUsers.push(formData);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        navigate(`/Home/${name}`);
      }
    }
  
    console.log("Form Submitted Successfully");
  }
  
  
  return (
    <div className="maindiv">
      <h3 className="header">Ready to Create your Account?</h3>
      <form className="main" onSubmit={handlesubmit}>
        <Input type="text" placeholder="Enter your First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        <Input type="text" placeholder="Enter your Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        <Input type="number" placeholder="Enter your Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} min="0" max="100" />
        <Input type="email" placeholder="Enter your Email Address" onChange={(e) => {
          setEmail(e.target.value);
          setFormData({ ...formData, email: e.target.value })
        }} />
        <p id="emailcheck"></p>
        <Input type="password" placeholder="Enter Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <Button name="Create Account" />
        <p id="noacc">Don't have an account?</p>
        <Link to='/login' id="link">Login</Link>
        <p id="error"></p>
      </form>
    </div>
  )
}
export default Signup;