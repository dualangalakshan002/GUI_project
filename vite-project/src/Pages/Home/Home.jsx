import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Explore from '../../Components/Explore/Explore';

const Home = () => {

  const [category, setCategory] = React.useState('All');
  return (
    <div>
      <Hero />
      <Explore category={category} setCategory={setCategory}/>
    </div>
  );
}

export default Home;
