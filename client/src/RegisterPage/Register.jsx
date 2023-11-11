import React from 'react';
import './register.css';
import { useState } from 'react';
import FormInput from './components/FormInput';


import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {

  //navigate hock to navigate user to Home after successes login 
  const navigate = useNavigate()



  //whit useState nonstop rerender when is input data in formInput
  const [values, setValues] = useState({  //use Object in useState to take over the big data
    username: "",
    email: "",
    country: "",
    img: "",
    city: "",
    phone: "",
    password: "",
    confirmPassword: "",
});
// console.log(values);
// console.log("re-render...");
//in form --><FormInput placeholder="Username" setUsername={setValues}/>
//in FormInput.jsx --->  <input placeholder={props.placeholder} onChange={ (e) => props.setValues(e.target.value)}/>



const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "User Name",
    errorMessage: "Username should be 3-16 characters (A-Z,a-z,0-9) and shouldn't include any special character! ",
    label: "User Name",
    pattern: "^[A-Za-z0-9]{3,16}$", //[A-Za-z0-9] -- start whit Capital letters, small letters or numbers |{3,16} -- min & max limit of required symbols //JS REGEX CODE !
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Need to be valid email address ... !",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "country",
    type: "text",
    placeholder: "Country",
    errorMessage: "please enter country!",
    label: "Country",
    pattern: "^[A-Za-z]{2,16}$",
    required: true,
  },
  {
    id: 4,
    name: "img",
    type: "text",
    placeholder: "avatar img link",
    errorMessage: "please enter image URL!",
    label: "img",
    // pattern: "/^https?:\/\/.+$/",
    required: true,
  },
  {
    id: 5,
    name: "city",
    type: "text",
    placeholder: "City",
    errorMessage: "please enter city!",
    label: "City",
    pattern: "^[A-Za-z]{2,16}$",
    required: true,
  },
  {
    id: 6,
    name: "phone",
    type: "text",
    placeholder: "Phone number",
    errorMessage: "please enter phone number!",
    label: "Phone",
    pattern: "^[0-9]{7,20}$",
    required: true,
  },
  {
    id: 7,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:"Password should be 8-20 characters and include at l letter, 1 number and 1 special symbol !",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 8,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  },
];


//function to prevent refresh the page after submit and pass DATA to BackEnd
const handleSubmit = async (e) => {
  e.preventDefault(); //this line prevent refreshing the page after click

      try{
          const inputData = values;
          console.log(inputData);
          await axios.post("http://localhost:8800/api/auth/register", inputData)
          //after finish new data input navigate USER to home "/" or LOGIN....
          navigate("/");
        } 
        catch(err) {
          console.log(err,"inputData Error!");
        }
}


//pass input data from user to useState using
const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
console.log(values);



return (
    <div className='wrapper1 d-flex justify-content-center'>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="">Register</h1>
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}  
          <button>Submit</button>
        </form>
      </div>
    </div>
)
}



export default Register