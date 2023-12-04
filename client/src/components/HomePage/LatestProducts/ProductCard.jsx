import React from 'react';
import { Link } from 'react-router-dom';


// "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
//     "product": "nike",
//     "manufacturer": "nikebG",
//     "description": "sdadsa sadasd asd asd",
//     "price": "11",
//     "quantity": "1",
//     "photo": "https://www.buzzsneakers.bg/files/thumbs/files/images/slike-proizvoda/media/390/390025-01/images/thumbs_800/390025-01_800_800px.jpg",
//     "_createdOn": 1701698140469,
//     "_id": "44cda08a


const ProductCard = ({_ownerId, product, manufacturer, description, price, quantity, photo, _id}) => {
  return (
    <div className="col-sm-3">
		<div className="thumb-wrapper">
			<div className="img-box">
				<img src={photo} className="img-responsive" alt="topProduct1" />									
			</div>
		<div className="thumb-content">
			<h4>{product}</h4>									
			<p className="item-price"><b>${price}</b></p>
			<Link to={`/shop/${_id}`} className="btn btn-primary">See more!</Link>
		</div>						
		</div>
	</div>
  )
}

export default ProductCard