import React from 'react';
import { Filter } from './Filter/Filter.jsx';
import ProductComp from './Product/ProductComp';

const ShopPage = () => {
  return (
    <div>
        <Filter/>
        <ProductComp/>
    </div>
  )
}

export default ShopPage