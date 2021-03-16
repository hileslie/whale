import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <h1>
      <Link to={'/dashboard'}>Hi Whale~</Link>
    </h1>
  )
}

export default HomePage;
