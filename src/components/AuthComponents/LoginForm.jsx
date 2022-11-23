import React, { useState,useEffect } from 'react';
import {useDispatch} from "react-redux";
import { signInUser } from '../../redux/actionCreators/authActionCreator';
import {useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(signInUser(email, password,setSuccess));
  };

  useEffect(() =>{
    if(success){
      navigate("/dashboard")
    }
  },[success])


  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group my-1">
        <input type="email" 
               name="email" 
               className="form-control" 
               placeholder='Email' 
               value={email}
               onChange={(evt) => setEmail(evt.target.value)}
               />
      </div>
      <div className="form-group my-1">
        <input type="password" 
               name="password" 
               className="form-control" 
               placeholder='Password' 
               value={password}
               onChange={(evt) => setPassword(evt.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary my-2 form-control">
        Login
      </button>
    </form>
  )
}

export default LoginForm