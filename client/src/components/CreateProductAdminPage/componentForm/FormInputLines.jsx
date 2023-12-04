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



{/* <div className="row mt-3">
                   
                   <div className="col-md-12"><label className="labels">Type Article: </label><input type="text" className="form-control" placeholder="enter simple product name" /></div>
                   <div className="col-md-12"><label className="labels">Manufacturer: </label><input type="text" className="form-control" placeholder="enter company manufacturer" /></div>
                   <div className="col-md-12"><label className="labels">Detailed Description: </label><input type="text" className="form-control" placeholder="enter description" /></div>
                   <div className="col-md-12"><label className="labels">Price: </label><input type="text" className="form-control" placeholder="enter price" /></div>
                   <div className="col-md-12"><label className="labels">Available quantity</label><input type="text" className="form-control" placeholder="enter quantity (pcs)" /></div>
                   <div className="col-md-12"><label className="labels">Link with product photo: </label><input type="text" className="form-control" placeholder="enter product photo URL(https://....)"/></div>                 
</div> */}