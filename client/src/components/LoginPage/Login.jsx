import React, { useContext } from "react";
import Google from "./google.png";
import Facebook from "./facebook.png";
import Github from "./github.png";
import './login.css'; 

import AuthContext from '../../context/AuthContext';
import useForm from '../../hooks/useForm';




const Login = () => {
  //call google login dialog box
  const google = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    // window.open("http://localhost:5000/auth/github", "_self");
  };
  const facebook = () => {
    // window.open("http://localhost:5000/auth/facebook", "_self");
  };

  //*********************************************************************************** */
  
  
  //login user by 'acc' & 'pass' logic:
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, { 
    email: '', 
    password: '',
  });
  



  return (
    <div className="login">
      <h1 className="loginTitle">Choose your Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <form onSubmit={onSubmit}>
            <input 
              className="input-fields" 
              type="text" 
              placeholder="email" 
              id="email" 
              name="email"
              value={values.email}
              onChange={onChange}
            />
            <input 
              className="input-fields" 
              type="password" 
              placeholder="password" 
              id="password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
            <button className="submitBTN" type="submit">Login</button>
          </form>

          {/* after logon operation is error, whe show error message whit next line */}
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
    </div>
  );
};

export default Login;