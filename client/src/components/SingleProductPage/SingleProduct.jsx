import React, { useContext, useEffect, useState } from 'react';
import './single.css';
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as productsService from '../../services/productsService';
import AuthContext from '../../context/AuthContext';


const SingleProduct = () => {
 
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const {email, userId } = useContext(AuthContext);
    const [productToDelete, setProductToDelete] = useState(null);


    useEffect( () => {
        productsService.getOne(productId).then((data) => setProduct(data)).catch((err) => console.log(err));
    }, [productId]);


    const handleDeleteClick = (productName) => {
        setProductToDelete(productName);
    };

    const handleConfirmDelete = async () => {
        // Perform the actual delete operation here
        console.log(`Deleting product: ${productToDelete}`);
        await productsService.remove(productId);
        
        // Clear the productToDelete state after deletion
        setProductToDelete(null);

        navigate(`/shop`);
    };

    const handleCancelDelete = () => {
        // Cancel the delete operation
        setProductToDelete(null);
      };


  return (
    <div>

        <div className="page-heading" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <h2>Product Details Page</h2>
                            <p className='banner-product-text'>Awesome &amp; beautiful products for You</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 


    <div className="section" id="product">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="left-images">
                    <img src={product.photo} alt="product-img-1"/>
                    {/* <img src={img2} alt="product-img-2"/> */}
                </div>
            </div>
            <div className="col-lg-4">
                <div className="right-content">
                    <h4>{product.product}</h4>
                    <p className="price">${product.price}</p>
                    <p>{product.manufacturer}</p>
                    <div className="quote">
                        <i className="fa fa-quote-left"></i><p>{product.description}</p>
                    </div>
                    <div className="quantity-content">
                        <div className="left-content">
                            <h6>Options:</h6>
                        </div>
                        <div className="right-content">
                            <button id='button-extra-1'><a href="/">Add To Cart</a></button>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <Link to={`/${productId}/edit`}><button id='edit-button'>Edit</button></Link>
                        <button id='delete-button' onClick={() => handleDeleteClick(product.product)}>DELETE</button>
                    </div>

                     {/* Confirmation Dialog for DELETE */}
                        {productToDelete && (
                            <div className="confirmation-dialog">
                                <p>Are you sure you want to delete {productToDelete}?</p>
                                <button className='delBTN-yes' onClick={handleConfirmDelete}>Yes</button>
                                <button className='delBTN-no' onClick={handleCancelDelete}>No</button>
                            </div>
                    )}

                </div>
            </div>
            </div>
        </div>
    </div>



   

    </div>
  )
}

export default SingleProduct;