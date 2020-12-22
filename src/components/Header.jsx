import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import appContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(appContext);

  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/Geeks-Garage">Geek´s Garage</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/Geeks-Garage/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
