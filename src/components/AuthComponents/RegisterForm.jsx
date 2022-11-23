import React, { useState, useEffect } from 'react'
import {useDispatch} from "react-redux";
import { signUpUser } from '../../redux/actionCreators/authActionCreator';
import {useNavigate } from "react-router-dom"

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [success, setSuccess] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !password || !passwordConfirmation) {
      alert('Please fill in all fields 1');
      return;
    }
    if(password !== passwordConfirmation){
      alert("Pasword do not match");
      return;
    }
    dispatch(signUpUser(name,email, password, setSuccess));
  };
  
  useEffect(() =>{
    if(success){
      navigate("/dashboard")
    }
  },[success])


  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group my-1">
        <input type="text" 
               name="name" 
               id="" 
               className="form-control" 
               placeholder='Name' 
               value={name}
               onChange={(evt) => setName(evt.target.value)}
               />
      </div>
      <div className="form-group my-1">
        <input type="email" 
               name="email" 
               id="" 
               className="form-control" 
               placeholder='Email' 
               value={email}
               onChange={(evt) => setEmail(evt.target.value)}
               />
      </div>
      <div className="form-group my-1">
        <input type="password" 
               name="password" 
               id="" 
               className="form-control" 
               placeholder='Pasword' 
               value={password}
               onChange={(evt) => setPassword(evt.target.value)} />
      </div>
      <div className="form-group my-1">
        <input type="password" 
               name="passwordConfirmation" 
               id="" 
               className="form-control" 
               placeholder='Re-type password' 
               value={passwordConfirmation}
               onChange={(evt) => setPasswordConfirmation(evt.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary my-2 form-control">
        Register
      </button>
    </form>
  )
}

export default RegisterForm