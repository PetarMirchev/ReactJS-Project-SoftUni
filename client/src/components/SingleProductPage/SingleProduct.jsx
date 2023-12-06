import React, { useContext, useEffect, useState, useReducer } from 'react';
import './single.css';
import { useNavigate, useParams, Link } from 'react-router-dom';
import * as productsService from '../../services/productsService';
import AuthContext from '../../context/AuthContext';
import reducer from './Comments/commentReducer';
import * as commentService from '../../services/commentService';
import useForm from '../../hooks/useForm';


const SingleProduct = () => {
 
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [productToDelete, setProductToDelete] = useState(null);
    const [ comments, dispatch] = useReducer(reducer, []);
    const { username, userId, img } = useContext(AuthContext);


    useEffect( () => {
        productsService.getOne(productId).then((data) => setProduct(data)).catch((err) => console.log(err));

        commentService.getAll(productId).then( (result) => {
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result,
            });
        }).catch( (error) => {console.log(error);});
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



//***************************************************************************************************** */   
    const addCommentHandler2 = async (values) => {
        const newComment = await commentService.create(productId, values.comment, img);
        
        newComment.owner = { username }; //push email (or username) of the creator
        newComment.img = { img };
        dispatch({
                type: "ADD_COMMENT",
                payload: newComment
            })
        };
        
    const { values, onChange, onSubmit } = useForm(addCommentHandler2, { comment: '', });
//****************************************************************************************************** */

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

                  {/* <!-- Edit/Delete buttons ( Only for creator of this)  --> */}
                  {userId === product._ownerId && ( 
                    <div>
                        <Link to={`/${productId}/edit`}><button id='edit-button'>Edit</button></Link>
                        <button id='delete-button' onClick={() => handleDeleteClick(product.product)}>DELETE</button>
                    </div>
                  )}

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




    {/* *********************** <Comments/>  *********************************** */}
    <div>

    <section className='comments-section'>
    <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-lg-10 col-xl-8">

            {comments.map(({ _id, text, owner: { username }, owner: { img } }) => (
             <li key={_id}>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-start align-items-center">
                        <img className="rounded-circle shadow-1-strong me-3"
                            src={img} alt="avatar" width="60"
                            height="60" />
                        <div>
                            <h6 className="fw-bold text-primary mb-1">{username}</h6>
                        </div>
                        </div>

                        <p className="mt-3 mb-4 pb-2">
                            {text}
                        </p>    
                    </div>
                </div>
            </li>   
            ))}


            {/* -----> user comment form <----- */}
            {userId && ( // if no user is logged in not show the comment form!
            <form onSubmit={onSubmit}>
                <div className="card-footer py-3 border-0">
                    <div className="d-flex flex-start w-100">
                    <img className="rounded-circle shadow-1-strong me-3"
                        src={img} alt="avatar" width="40"
                        height="40" />
                    <div className="form-outline w-100">
                        <textarea className="form-control" 
                        id="textAreaExample" 
                        rows="4" 
                        name="comment"
                        value={values.comment}
                        onChange={onChange}
                        placeholder='add your comment.....'
                        ></textarea>
                        {/* <label className="form-label" htmlFor="textAreaExample">Message</label> */}
                    </div>
                    </div>
                    <div className="float-end mt-2 pt-1">
                    <button type="submit" className="btn btn-primary btn-sm">Post comment</button>
                    {/* <button type="button" className="btn btn-outline-primary btn-sm">Cancel</button> */}
                    </div>
                </div>
            </form>
            )}
            </div>
        </div>
        </div>

    </section>

    
    {comments.length === 0 && ( // return [] --> 'Test game', 'Fantasy', '112', ....
                    <p className="row d-flex justify-content-center">No comments.</p>
    )}

    </div>



    </div>
  )
}

export default SingleProduct;