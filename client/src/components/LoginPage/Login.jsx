import React, { useContext } from "react";
import Google from "./google.png";
import Facebook from "./facebook.png";
import Github from "./github.png";
import './login.css'; 
import { useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import { useState } from 'react';
import FormInput from './component/FormInputLogin';

const Login = () => {

  const navigate = useNavigate();

  const { loginSubmitHandler } = useContext(AuthContext);



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
  
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "valid email !",
      label: "Email",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"incorrect password!",
      label: "Password",
      //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];


  //*********************************************************************************** */

//pass input data from user to useState using
const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

const [values, setValues] = useState({  //use Object in useState to take over the big data
  email: "",
  password: "",
});


//function to prevent refresh the page after submit and pass DATA to BackEnd
const handleSubmit = async (e) => {
  e.preventDefault();
      try{
          const inputData = values;
          loginSubmitHandler(inputData);
          navigate("/");
        } 
        catch(err) {
          console.log(err,"inputData Error!");
          navigate('*'); //'/404'
        }
}
 
//*********************************************************************************** */

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
        <form onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}  
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