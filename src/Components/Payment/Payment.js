import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhDu5BCbjR3SymguaTDooC6YHvbWvZIwTzLBt3HTrrhZnHnQYg0uGELPuJJgU5p1Slpu8PtIF0BZexdNGxZnxyd005echE6db');

const Payment = ({setPaymentData}) => {
  return (
    <Elements stripe={stripePromise}>
        <SplitCardForm setPaymentData={setPaymentData} />
    </Elements>
  );
};

export default Payment;