import React from 'react';
import {Link} from 'react-router-dom';


const CardBox = ({post}) => {

  return (

    <div className="col-lg-3">
        <div className="item">
            <div className="thumb">
                <div className="hover-content">
                    <ul>
                        <li>
                            <Link to={`/shop/${post._id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </Link>
                        </li>
                  
                    </ul>
                </div>
                <img width="250" height="320" src={post.photo} alt="one"/>
            </div>
            <div className="down-content">
                <h4>{post.product}</h4>
                <p>${post.price}</p>
                <span>{post.description}</span>
            </div>
        </div>
    </div>
  )
}

export default CardBox;