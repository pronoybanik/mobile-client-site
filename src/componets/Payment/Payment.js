import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className='font-serif flex justify-center items-center mt-12'>
                <div className='w-2/3 p-4  border-solid border-2 border-sky-500'>
                    <h1 className='text-2xl  font-bold'>payment For:- {data.displayName} </h1>
                    <h1 className='text-xl font-semibold mb-4'>Please pay:- BDT {data.price} </h1>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                        data={data}
                        />
                    </Elements>
                </div>
            </div>




        </div>
    );
};

export default Payment;