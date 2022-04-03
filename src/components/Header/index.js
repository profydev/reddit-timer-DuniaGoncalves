import React from 'react';
import { Link } from 'react-router-dom';
import logoSVG from '../../assets/logo.svg';
import './styles.css';

const Header = () => (
  <div>
    <nav>
      <Link to="/"><img src={logoSVG} alt="logo" /></Link>
      <ul>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
