import React, { useState } from 'react';
import './createProduct.css';
import FormInput from './componentForm/FormInputLines';

import { useNavigate } from 'react-router-dom';
import * as productsService from '../../services/productsService'

const CreateProductPage = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({  //use Object in useState to take over the big data
        product: "",
        manufacturer: "",
        description: "",
        price: "",
        quantity: "",
        photo: "",
    });

    //pass input data from user to useState using
    const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    };
  

    const inputs = [
        {
          id: 1,
          name: "product",
          type: "text",
          placeholder: "enter product name",
          errorMessage: "product name should be 2-16 characters (A-Z,a-z,0-9) and shouldn't include any special character! ",
          label: "Product name",
          pattern: "^[A-Za-z0-9]{2,16}$", //[A-Za-z0-9] -- start whit Capital letters, small letters or numbers |{3,16} -- min & max limit of required symbols //JS REGEX CODE !
          required: true,
        },
        {
            id: 2,
            name: "manufacturer",
            type: "text",
            placeholder: "enter manufacturer name",
            errorMessage: "manufacturer name should be 2-16 characters (A-Z,a-z,0-9) and shouldn't include any special character! ",
            label: "Manufacturer name",
            pattern: "^[A-Za-z0-9]{2,16}$", //[A-Za-z0-9] -- start whit Capital letters, small letters or numbers |{3,16} -- min & max limit of required symbols //JS REGEX CODE !
            required: true,
          },
        {
          id: 3,
          name: "description",
          type: "text",
          placeholder: "description",
          errorMessage: "please enter description!",
          label: "Description",
        //   pattern: "^[A-Za-z]{2,500}$",
          required: true,
        },
        {
            id: 4,
            name: "price",
            type: "number",
            placeholder: "price in $",
            errorMessage: "please enter price number!",
            label: "Price",
            pattern: "^[0-9]{1,100}$",
            required: true,
        },
        {
            id: 5,
            name: "quantity",
            type: "number",
            placeholder: "quantity (pcs)",
            errorMessage: "please enter quantity number!",
            label: "Quantity",
            pattern: "^[0-9]{1,50000}$",
            required: true,
        },
        {
          id: 6,
          name: "photo",
          type: "text",
          placeholder: "product photo link",
          errorMessage: "please enter image URL!",
          label: "Photo",
          pattern: "https?://.*",
          required: true,
        },
      ];
      


    const handleSubmit = async (e) => {
        e.preventDefault();
      
            try{
                const productData = values;
                const result = await productsService.create(productData);
                navigate("/");
              } 
              catch(err) {
                console.log({err});
                console.log(err,"productData Error!");
                navigate("*");
              }
      };


  return (
    <div className='create-product-wrapper'>
          
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
               
                </div>

                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Create/Add New Product</h4>
                </div>

                {/* <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                   
                        <div className="col-md-12"><label className="labels">Type Article: </label><input type="text" className="form-control" placeholder="enter simple product name" /></div>
                        <div className="col-md-12"><label className="labels">Manufacturer: </label><input type="text" className="form-control" placeholder="enter company manufacturer" /></div>
                        <div className="col-md-12"><label className="labels">Detailed Description: </label><input type="text" className="form-control" placeholder="enter description" /></div>
                        <div className="col-md-12"><label className="labels">Price: </label><input type="text" className="form-control" placeholder="enter price" /></div>
                        <div className="col-md-12"><label className="labels">Available quantity</label><input type="text" className="form-control" placeholder="enter quantity (pcs)" /></div>
                        <div className="col-md-12"><label className="labels">Link with product photo: </label><input type="text" className="form-control" placeholder="enter product photo URL(https://....)"/></div>                 
                </div>
                <div className="mt-5 text-center"><button className="btn btn-success profile-button" type="submit">Create/Add Product</button></div>
                </form>  */}

                <form onSubmit={handleSubmit}>
                    <div className="row mt-3">
                        {inputs.map(input => (
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                        ))}  
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-success profile-button" type="submit">Create/Add Product</button></div>
                </form>
                
           </div>
        </div>

    </div>
</div>
</div>

  )
}

export default CreateProductPage