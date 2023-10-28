import React from 'react';
import './cart1.css';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const data1 = [  
{
  id: 1,
  img: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  title: "Long T-shirt",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  isNew: false,
  oldPrice: 19,
  price: 10,
},
{
  id: 2,
  img: 'https://images.unsplash.com/photo-1611804169105-1cd73d682be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  title: "Long T-shirt",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  isNew: true,
  oldPrice: 32,
  price: 15,
},
];

const Cart1 = () => {
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data1.map(item => (
        <div className='item' key={item.id}> 
          <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              {/*if is not desc '?' will skip/not work, to limit shown description use 'substring(0,100)' to show only 100 symbols */}
              <p>{item.desc?.substring(0,100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
          {/* <DeleteForeverIcon className='delete'/> */}
          <button className='delete'>Delete</button>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL:</span>
        <span>$4545</span>
      </div>
      <button className="checkout">Proceed to Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart1;
