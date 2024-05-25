import React, {useState} from "react";
import "./Login.css";
import { FaUser,FaLock , FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  
  const [action,setAction] = useState('');
  const registerLink = ()=> {
    setAction(' active');
  }; 
  const loginLink = () =>{
    setAction('');
  };
  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <div>
            <h1>Login</h1>
          </div>
          <div className="input-box">
            <input type="text" placeholder="username"></input>
            <FaUser className="icon"/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="password"></input>
            <FaLock className="icon" />
            
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              remember me
            </label>
            
          </div>
          <button type="submit">login</button>
          <div className="register-link">
            <p>
              don't have an account?<a href='#'onClick={registerLink}>register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <div>
            <h1>Registration</h1>
          </div>
          <div className="input-box">
            <input type="text" placeholder="username"></input>
            <FaUser className="icon"/>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email"></input>
             <FaEnvelope className="icon"/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="password"></input>
            <faLock className="icon" />
            
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              I agree to the Terms & conditions
            </label>
            
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?<a href='#' onClick={loginLink}>login</a>
            </p>
          </div>
        </form>
      </div>

    </div>
  );

};
export default LoginRegister;