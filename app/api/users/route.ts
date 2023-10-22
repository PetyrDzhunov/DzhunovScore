import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();
  // check if email exists and return error
  //hash password
  await connectMongoDB();
  await User.create({ username, email, password });
  return NextResponse.json(
    { message: 'User created successfully' },
    { status: 201 },
  );
}
