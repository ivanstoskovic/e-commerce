import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './C_stripe_button.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Stripe ocekuje cenu u centima
    const publishableKey = 'pk_test_FWFXl1szZkk9y3UWsq5977Sn00jdL1qvI9';
    const onToken = token => {// funkcija koja se prosledjuje strajpu koji joj u parametar vraca token kada je uspesno placanje i koji se nakon toga treba da se salje na bekand
        console.log(token); // za sad samo se loguje dok ne napravimo bekend
        alert('Payment seccessful');
    }

    return(
        <StripeCheckout
            label='Pay now'
            name = 'E-commerce'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your price is ${price}`}
            amount = { priceForStripe }
            panelLabel = 'Pay now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckoutButton;