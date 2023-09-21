import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51NJrvkEcmzfZDnntfdZp3Z5f7JYUJqmvTtgSZHnxQ3lCdyCuJYXuH6QCbVRlHgYZsXBuwqGGoL846Li4Vhc4M60X00yFSdvFb0')
const Payment = () => {

    return (
        <div>
            <h1 className='text-center pt-10 text-2xl' >Plz Payment</h1>
            <div className='m-24'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
            <h1 className='text-center'>OR</h1>
            <div>

            </div>
        </div>
    );
};

export default Payment;