import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Explore from '../../Components/Explore/Explore';
import ProductList from '../../Components/ProductList/ProductList';
import './Home.css';

const Home = () => {

  const [category, setCategory] = React.useState('All');
  return (
    <div className='home'>
      <Hero />
      <Explore category={category} setCategory={setCategory}/>
      <ProductList category={category}/>
    </div>
  );
}

export default Home;
