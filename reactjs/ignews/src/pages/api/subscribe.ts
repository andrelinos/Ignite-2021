import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { stripe } from '../../services/stripe';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const session = await getSession({ req: request });

    const stripeCustomer = await stripe.customers.create({
      email: session.user.email,
      // metadata
    })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1IkROdL1D4bzO7lGKFC5FqHp', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return response.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    response.setHeader('Allow', 'POST');
    response.status(405).end('Method not allowed');
  }
}
