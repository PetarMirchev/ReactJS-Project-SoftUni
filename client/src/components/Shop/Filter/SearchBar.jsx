import React from 'react';
import './filter.css';	


export const SearchBar = ({posts, setSearchResults}) => {
  
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    //if input is empty or we clear the search -->  return original posts/data on page
    if(!e.target.value) { return setSearchResults(posts); };

     // original data filtered to find by 'product' or (||) text 'manufacturer' in post
     const resultsArray = posts.filter(post => (post.product.toLowerCase()).includes(e.target.value.toLowerCase()) || (post.manufacturer.toLowerCase()).includes(e.target.value.toLowerCase()));
     setSearchResults(resultsArray);
  };


  
  return (


    <div className='wind-wrapper'> 
      <div className='container'>
        <h3 className='text-center mx-auto'>Search product:</h3>
      </div> 
      <div className='search-class'>

            <form action='search' onSubmit={handleSubmit}>
    	          <input className='search__input'
                  type='text'
                  id='search'
                  onChange={handleSearchChange} 
                />
                {/* <button className='search__button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button> */}
            </form>
    </div>
    </div>

  )
}


