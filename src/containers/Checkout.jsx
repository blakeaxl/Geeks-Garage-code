import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(appContext);

  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout section">
      <div className="Checkout-container">
        <div className="Checkout-content">
          <h3 className="Checkout-title">Orders</h3>
          <h3 className="Checkout-title">
            {cart.length > 0 ? 'List of orders:' : 'Your cart is empty...'}
          </h3>
          {cart.map((item, i) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4> {item.title} </h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item, i)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3 className="Checkout-title">
              {'Total price: $' + handleTotal()}
            </h3>
            <Link to="/Geeks-Garage/checkout/information">
              <button type="button">Proceed to checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
