import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({price}) {
    const priceForStripe = price * 100;
    const key = `pk_test_51HlH8PIxzRwpHNfC0GkeyOMNFKOHzONoO0ahwDEqrxSyQ8BaVM16ULCB5sM3jcS2RP7FYJS74CmlpvFW7Vm2KkDn00cHHg9Put`;

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTHING'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={key}
         />
    );
};
