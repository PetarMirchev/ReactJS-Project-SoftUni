import React from 'react';
import { useState } from 'react';
import styles from "./formInput.module.css";

const FormInputLogin = (props) => {

  const {label, errorMessage, onChange, id, ...inputProps } = props;


  // to don't show nonstop 'errorMessage', but only when is mark & information entered
  const [focused, setFocused] = useState(false);

  //when is mark (focus) field useState is changed to 'true' --> is shown red error message --> active in CSS logic
  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className={styles['formInput']}>
          <input {...inputProps} 
                  onChange={onChange} 
                  onBlur={handleFocus} 
                  onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)} //if xx..name==="confirmPassword" set setFocused to TRUE --> for final field to show "Passwords don't match!" until is OK
                  focused={focused.toString()}
          />
        <span className={styles['error-message']}>{errorMessage}</span>
        {/* alternative style logic for .module.css  -->  <span className={styles.error-message}>...</span> */}
    </div>
  )
}
//onBlur={handleFocus}  --> click & leave
//onFocus={}   --> just 1 click
export default FormInputLogin;