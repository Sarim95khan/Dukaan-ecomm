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
  const req = await request.json();
  const uid = uuid();

  const setCookies = cookies();
  const user_id = cookies().get('user_id');

  if (!user_id) {
    // @ts-igonre
    setCookies.set('user_id', uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: cookies().get('user_id')?.value as string,
        product_id: req.product_id,
        quantity: 6,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (err) {
    console.log(err);
  }
}
