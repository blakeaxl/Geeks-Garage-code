import React, { useContext, useState } from 'react';
import { PayPalButton } from 'react-paypal-button';
import appContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(appContext);
  const { cart, buyer } = state;

  const [error, setError] = useState(false);

  const paypalOptions = {
    clientId:
      'AWusNlMuwbMTLXoFnfX-gmQtyoqKCWNFnDbQM4ZHPuWGUq-YKsQdTVhDN2EPQR27ZmvmS2PlCZ4Gfqro',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    setError(false);
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      setError(false);
      addNewOrder(newOrder);
      history.push('/Geeks-Garage/checkout/success');
    } else {
      setError(true);
    }
  };

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Your order list:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4 className="Payment-text">{item.title}</h4>
              <span className="Payment-text">${' ' + item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => setError(true)}
            onPaymentCancel={(data) => setError(true)}
          />
        </div>
        {error && (
          <div className="Payment-error">
            <p>Oops, Sorry there has been an error, please try again.</p>
          </div>
        )}
      </div>
      <div />
    </div>
  );
};

export default Payment;
