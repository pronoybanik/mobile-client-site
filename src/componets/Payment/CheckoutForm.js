import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ data }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const { price, name, email, _id } = data;

    useEffect(() => {
        fetch('https://mobile-server-site.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );
        setSuccess('');
        setProcessing(true);
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        };
        if (paymentIntent.status === 'succeeded') {
            setSuccess('congrats! Your Payment completed')
            setTransactionId(paymentIntent.id)
            // stor payment info in database:-
            const payment = {
                price,
                email,
                paymentIntent: paymentIntent.id,
                bookingId: _id

            }
            fetch('https://mobile-server-site.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('congrats! Your Payment completed')
                        setTransactionId(paymentIntent.id)
                        toast.success('data store by database')
                    }

                })
        }


        setProcessing(false);
        console.log('paymentIntent', paymentIntent);
    }






    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-info mt-4'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

            </form>
            <p className='text-red-500'>{cardError}</p>
            <div className='text-error mt-2'>
                {
                    success && <div>
                        <p className='text-green-500'>{success}</p>
                        <p >Your transactionId: <span className='font-bold text-black'> {transactionId}</span> </p>
                    </div>
                }
            </div>
        </div>

    );
};

export default CheckoutForm;