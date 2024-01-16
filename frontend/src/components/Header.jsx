import React from 'react';
import { Link } from "react-router-dom";
import Clean from '../assets/clean.png';

const Header = () => {
  return (
    <div className='p-4 border-bottom border-white'>
  <Link to="/">
    <img src={Clean} width={100} height={100} alt="Clean Logo" />
  </Link>
</div>
  )
}

export default Header