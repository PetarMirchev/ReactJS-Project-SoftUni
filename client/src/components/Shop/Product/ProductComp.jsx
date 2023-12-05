import React from 'react'
import './product.css';
import CardBox from './CardBox';


const ProductComp = ({searchResults}) => {

    //call <CardBox/> & render all elements!
    const results = searchResults.map(post => <CardBox key={post._id} post={post}/>);

     // return the content -> 1 check is some kind of result -> no result, display message 'no data'
     const content = results?.length ? results: <article><h2 id='no-result-search'>Sorry... No Matching to your Search!</h2></article>




  return (
<div className='buffer1'>

    <section className="section" id="products">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <p id='product-span-info'>Check out all of our products.</p>
                    </div>
                </div>
            </div>
        </div>

    
        <div className="container">
            <div className="row">
               
                
               {/* ------>render Card hear! <CardBox/> <--------*/}
                                 {content}
                {/* ****---------->      <----------------------**** */}



                <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            <li>
                                <a href="/">1</a>
                            </li>
                            <li className="active">
                                <a href="/">2</a>
                            </li>
                            <li>
                                <a href="/">3</a>
                            </li>
                            <li>
                                <a href="/">4</a>
                            </li>
                            <li>
                                <a href="/">-</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div>
  )
}

export default ProductComp