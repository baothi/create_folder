import React from 'react'
import LoginForm from '../../../components/AuthComponents/LoginForm'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Login here</h1>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <LoginForm />
          <Link to="/Register" className='text-end'>
            Not a member? Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login