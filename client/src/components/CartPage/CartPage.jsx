import React from 'react';
import './cartPage.css';
import { Link } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from './features/cartSlice';


const CartPage = () => {

    // const {cart, totalQuantity, totalPrice} = useSelector((state) => state.allCart);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getCartTotal());
    // },[cart])


  return (

<div className='cart-page-wrapper'>
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4 className='shopping-cart'><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt='cart-item-1'/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <Link to={'/'}>-</Link><Link to={'/'} className="border">1</Link><Link to={'/'}>+</Link>
                                
                            </div>
                            <div className="col">&euro; 44.00 </div>
                            <div className="col"><p className="close">&#10005;</p></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" alt='cart-item-2'/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <Link to={'/'}>-</Link><Link to={'/'} className="border">1</Link><Link to={'/'}>+</Link>
                            </div>
                            <div className="col">&euro; 44.00 </div>
                            <div className="col"><p className="close">&#10005;</p></div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" alt='cart-item-3'/></div>
                            <div className="col">
                                <div className="row text-muted">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <Link to={'/'}>-</Link><Link to={'/'} className="border">1</Link><Link to={'/'}>+</Link>
                            </div>
                            <div className="col">&euro; 44.00 </div>
                            <div className="col"><p className="close">&#10005;</p></div>
                        </div>
                    </div>
                    <div className="back-to-shop">
                        <Link to={'/'}><p className="text-muted">Back to shop</p></Link>
                    </div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" >ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING:</p>
                        <select>
                            <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                            <option className="text-muted">Fast-Delivery- &euro;10.00</option>
                        </select>
                        <p>DISCOUNT CODE:</p>
                        <input id="code" placeholder="Enter your code... "/>
                    </form>
                    <div className="row" >
                        <div className="col" id='total-price'>TOTAL PRICE: </div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn-checkout">CHECKOUT</button>
                </div>
            </div>           
        </div>       
    </div>







//     <div className='container justify-content-center'>

//     <div className='cart-page-wrapper'>
//             <div className="card">
//                 <div className="row">
//                     <div className="col-md-8 cart">
//                         <div className="title">
//                             <div className="row">
//                                 <div className="col">
//                                     <h4 className='shopping-cart'><b>Shopping Cart</b></h4>
//                                 </div>
//                                 <div className="col align-self-center text-right text-muted">
//                                     {cart.length} items
//                                 </div>
//                             </div>
//                         </div>  


//                         {cart?.map( (data) => (
//                             <div className="row border-top border-bottom" key={data.id}>
//                             <div className="row main align-items-center">
//                                 <div className="col-2"><img className="img-fluid" src={data.img} alt='cart-item-1'/></div>
//                                 <div className="col">
//                                     <div className="row text-muted">{data.title}</div>
//                                     <div className="row">description: .....</div>
//                                 </div>
//                                 <div className="col">
//                                     <a href="#" onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</a>
//                                     <a href="#" className="border">{data.quantity}</a>
//                                     <a href="#" onClick={() => dispatch(increaseItemQuantity(data.id))}>+</a>       
//                                 </div>
//                                 <div className="col">&euro; {data.price} </div>
//                                 <div className="col"><p className="close" onClick={() => dispatch(removeItem(data.id))}>&#10005;</p></div>
//                             </div>
//                         </div>
//                         ))}
                        
                        


//                         <div className="back-to-shop">
//                             <Link to={'/'}><p className="text-muted">Back to shop</p></Link>
//                         </div>
//                     </div>



//                     <div className="col-md-4 summary">
//                         <div><h5><b>Summary</b></h5></div>
//                         <hr/>
//                         <div className="row">
//                             <div className="col" >ITEMS (pcs):</div>
//                             <div className="col text-right">{totalQuantity}</div>
//                         </div>
                   
//                         <div className="row" >
//                             <div className="col" id='total-price'>TOTAL PRICE: </div>
//                             <div className="col text-right">&euro; {totalPrice}</div>
//                         </div>
//                         <button className="btn-checkout">CHECKOUT</button>
//                     </div>


//                 </div>           
//             </div>       
//         </div>


// </div>
  )
}

export default CartPage