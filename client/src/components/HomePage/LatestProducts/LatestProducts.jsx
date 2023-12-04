import React, { useEffect, useState } from 'react';
import './latestProducts.css';

import * as productsService from '../../../services/productsService';
import ProductCard from './ProductCard';


const LatestProducts = () => {

	const [latestProducts, setLatestProducts] = useState([]);

	useEffect (() => {
		productsService.getLatest().then( data => setLatestProducts(data)).catch(err => console.log(err));
	}, []);


  return (
   <div id='products-wrapper-box1'>
    <div className="container-last-products-new">
	    <div className="row">
		    <div className="col-md-12">
			    <h2 className='latest-h2-control'>Latest Products</h2>
			<div id="myCarousel" className="carousel-box-latest slide">
			
			<div className="carousel-inner">
				<div className="item active">
					<div className="row">

						{latestProducts.map(product => <ProductCard  key={product._id} {...product}/>)}
						
								
						{/* <div className="col-sm-3">
							<div className="thumb-wrapper">
								<span className="wish-icon"><i className="fa fa-heart-o"></i></span>
								<div className="img-box">
									<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kygdthzb7iwd7okjzts9/sportswear-essential-t-shirt-lR8z6q.png" className="img-responsive" alt="topProduct3"/>
								</div>
								<div className="thumb-content">
									<h4>Nike Sport X</h4>									
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i class="bi bi-star-fill"></i></li>
											<li className="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" /></li>
											<li className="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" /></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<p className="item-price"><b>$250.00</b></p>
									<Link to={'/'} className="btn btn-primary">Add to Cart</Link>
								</div>						
							</div>
						</div> */}
					</div>
				</div>
			</div>	
		
		</div>
		</div>
	</div>
  </div>

</div> 

  )
}

export default LatestProducts