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
						{!latestProducts.length && (<h2 id='no-result-search'>Sorry... No Products to show You!</h2> )}
	
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