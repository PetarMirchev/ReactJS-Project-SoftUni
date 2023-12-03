import React from 'react';
import './latestProducts.css';
import {Link} from 'react-router-dom';



const LatestProducts = () => {
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
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5f1eae00-a647-4990-8e15-89c31cb1348c/ja-1-wet-cement-basketball-shoes-RwJZZ9.png" className="img-responsive" alt="topProduct1" />									
								</div>
								<div className="thumb-content">
									<h4>Nike Air</h4>									
									{/* <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div> */}
									<p className="item-price"><b>$369.00</b></p>
									<Link to={'/'} className="btn btn-primary">Add to Cart</Link>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<span className="wish-icon"><i className="fa fa-heart-o"></i></span>
								<div className="img-box">
									<img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Citizen X10</h4>									
									{/* <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div> */}
									<p className="item-price"><b>$23.99</b></p>
									<Link to={'/'} className="btn btn-primary">Add to Cart</Link>
								</div>						
							</div>
						</div>		
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<span className="wish-icon"><i className="fa fa-heart-o"></i></span>
								<div className="img-box">
									<img src="https://css.brilliantearth.com/static/img/gateway/rings/ir350/LargeTile1_GemstoneRings_RINGSGATEWAY_1152x648.jpg" className="img-responsive" alt="topProduct2"/>
								</div>
								<div className="thumb-content">
									<h4>Svarovski J11</h4>									
									{/* <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
										</ul>
									</div> */}
									<p className="item-price"><b>$649.00</b></p>
									<Link to={'/'} className="btn btn-primary">Add to Cart</Link>
								</div>						
							</div>
						</div>								
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<span className="wish-icon"><i className="fa fa-heart-o"></i></span>
								<div className="img-box">
									<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kygdthzb7iwd7okjzts9/sportswear-essential-t-shirt-lR8z6q.png" className="img-responsive" alt="topProduct3"/>
								</div>
								<div className="thumb-content">
									<h4>Nike Sport X</h4>									
									{/* <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i class="bi bi-star-fill"></i></li>
											<li className="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" /></li>
											<li className="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" /></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div> */}
									<p className="item-price"><b>$250.00</b></p>
									<Link to={'/'} className="btn btn-primary">Add to Cart</Link>
								</div>						
							</div>
						</div>
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