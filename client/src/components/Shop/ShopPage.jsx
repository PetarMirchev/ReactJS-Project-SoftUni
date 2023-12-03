import React from 'react';
import { SearchBar } from './Filter/SearchBar.jsx';
import ProductComp from './Product/ProductComp';
import { useEffect, useState } from 'react';	
import axios from 'axios';


const ShopPage = () => {

  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
};

useEffect(() => {
  getPosts().then(json => {
    setPosts(json)
    setSearchResults(json)
  })
}, []);

  // const [categories, setCategories] = useState([]);
  // useEffect(() => {s
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products`);
  //       setCategories(data);
  //     } catch (err) {
  //      console.log(err, 'error on filter');
  //     }
  //   };
  //   fetchCategories();
  // }, []);


  return (
    <div>
        <SearchBar  posts={posts} setSearchResults={setSearchResults}/>
        <ProductComp searchResults={searchResults}/>
    </div>
  )
}

export default ShopPage