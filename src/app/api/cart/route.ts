import { cartTable, db } from '@/lib/drizzle';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as uuid } from 'uuid';

export async function GET(request: NextRequest) {
  const res = await db.select().from(cartTable);
  console.log(res);
  return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
  const user_id = uuid();
  const setCookies = cookies();

  const req = await request.json();
  try {
    const res = await db.insert(cartTable).values({
      user_id: '',
      product_id: req.product_id,
      quantity: 1,
    });
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
