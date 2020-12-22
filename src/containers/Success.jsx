import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);

  const { buyer } = state;

  console.log(buyer);

  return (
    <div className="Success section">
      <div className="Success-content">
        <h2 className="Success-text">
          {buyer.name + ', thank you for your purchase'}
        </h2>
        <span className="Success-text">Your purchase was successful.</span>
      </div>
    </div>
  );
};

export default Success;
