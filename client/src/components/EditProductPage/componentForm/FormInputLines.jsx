import React from 'react';
import { useState } from 'react';
import styles from "./formInputLines.module.css";

const FormInputLines = (props) => {

  const {label, errorMessage, onChange, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

   //when is mark (focus) field useState is changed to 'true' --> is shown red error message --> active in CSS logic
   const handleFocus = (e) => {
    setFocused(true);
   }
    

  return (
    <div className="col-md-12">
        <div className={styles['formInput']}>
            <input {...inputProps} 
                    onChange={onChange} 
                    onBlur={handleFocus} 
                    onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)} //if xx..name==="confirmPassword" set setFocused to TRUE --> for final field to show "Passwords don't match!" until is OK
                    focused={focused.toString()}
            />
          <span className={styles['error-message']}>{errorMessage}</span>
        </div>
        {/* alternative style logic for .module.css  -->  <span className={styles.error-message}>...</span> */}
    </div>
  )
}

export default FormInputLines;
