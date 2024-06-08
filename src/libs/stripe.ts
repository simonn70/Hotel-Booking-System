import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MjQm2Lngv6rIXCJoYTWi9kJ9xKg8Ygfz9S2EhS00G34ZpVhvgOAyZfpKrGW0EIno5YrTVaEmgdXg3adxpFXklYx00PauVFklJ"
    );
  }

  return stripePromise;
};
