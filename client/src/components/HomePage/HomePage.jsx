import React from 'react';
import Banner from './Banner/Banner';
import ExploreProducts from './ExploreOurProducts/ExploreProducts';
import LatestProducts from './LatestProducts/LatestProducts';

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <LatestProducts/>
        <ExploreProducts/>

    </div>
  )
}

export default HomePage;