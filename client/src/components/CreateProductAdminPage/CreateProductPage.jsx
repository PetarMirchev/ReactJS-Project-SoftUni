import React from 'react';
import './createProduct.css';

import { useNavigate } from 'react-router-dom';
import * as productsService from '../../services/productsService'

const CreateProductPage = () => {

    const navigate = useNavigate();

    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(productData);

        try {
            const result = await productsService.create(productData);

            navigate('/');
        } catch (error) {
            console.log({error});
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

                <form onSubmit={createProductSubmitHandler}>
                <div className="row mt-3">
                   
                        <div className="col-md-12"><label className="labels">Type Article: </label><input type="text" className="form-control" placeholder="enter simple product name" /></div>
                        <div className="col-md-12"><label className="labels">Manufacturer: </label><input type="text" className="form-control" placeholder="enter company manufacturer" /></div>
                        <div className="col-md-12"><label className="labels">Detailed Description: </label><input type="text" className="form-control" placeholder="enter description" /></div>
                        <div className="col-md-12"><label className="labels">Price: </label><input type="text" className="form-control" placeholder="enter price" /></div>
                        <div className="col-md-12"><label className="labels">Available quantity</label><input type="text" className="form-control" placeholder="enter quantity (pcs)" /></div>
                        <div className="col-md-12"><label className="labels">Link with product photo: </label><input type="text" className="form-control" placeholder="enter product photo URL(https://....)"/></div>
                    
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