import React from 'react'

const CardBox = ({post}) => {
  return (

         <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li>
                                        <a href="/shop/:productId">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                            </svg>
                                            Post ID: {post.id}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/shop/:productId">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            Post ID: {post.id}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/shop/:productId">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                            Post ID: {post.id}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img src="images/men-01.jpg" alt="one"/>
                        </div>
                        <div className="down-content">
                            <h4>ClassNameic Spring {post.title}</h4>
                            <span>$120.00 - {post.body}</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

  )
}

export default CardBox;