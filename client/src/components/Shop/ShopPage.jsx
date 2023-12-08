import React from 'react';
import { SearchBar } from './Filter/SearchBar.jsx';
import ProductComp from './Product/ProductComp';
import { useEffect, useState } from 'react';	
import * as productsService from '../../services/productsService.js'


const ShopPage = () => {

  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
    productsService.getAllData().then(data => {
      setPosts(data)
      setSearchResults(data)
  }).catch(err => console.log(err))
}, []);

  return (
    <div>
        <SearchBar  posts={posts} setSearchResults={setSearchResults}/>
        <ProductComp searchResults={searchResults}/>
    </div>
  )
}

export default ShopPage;