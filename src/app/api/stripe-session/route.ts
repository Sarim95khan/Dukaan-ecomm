import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(key, {
  apiVersion: '2022-11-15',
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NLrSyEeY9w1IjmkAVBIdvyQ' },
          { shipping_rate: 'shr_1NLrSDEeY9w1Ijmk6VlsLK6g' },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: 'pkr',
              product_data: {
                name: item.product.productName,
              },
              unit_amount: item.product.productPrice * 100,
            },
            quantity: item.qty,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        mode: 'payment',
        success_url: `${request.headers.get('origin')}/success`,
        cancel_url: `${request.headers.get('origin')}/?canceled=true`,
      });
      return NextResponse.json({ session });
    }
    // Create Checkout Sessions from body params.
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Please send item data' });
  }
}
