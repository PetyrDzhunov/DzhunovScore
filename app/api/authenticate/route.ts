import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SALT_COUNT } from '@/constants/constants';
import { sendResponse } from '@/utils/api-utils';
import { AuthActions, AuthenticationRequestData } from '@/types/generic-types';
import { getOneUserByEmail } from '../users/route';
import { MongoUser, MongoUserWithoutPassword } from '@/types/user/user-types';

export async function POST(request: NextRequest) {
  const { username, email, password, action }: AuthenticationRequestData =
    await request.json();
  await connectMongoDB();
  if (action === AuthActions.Register) {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    const foundUser = await getOneUserByEmail(email);
    if (foundUser) {
      return sendResponse('User with same email already exists!', 400);
    }

    try {
      const newUser: MongoUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      return sendResponse('User created successfully!', 201, newUser);
    } catch (err) {
      return sendResponse('Failed to create user!', 401);
    }
  } else if (action === AuthActions.Login) {
    const foundUser = await User.findOne({
      email,
    });
    if (!foundUser) {
      return sendResponse('Invalid data', 400);
    }
    const passwordsMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordsMatch) {
      return sendResponse('Invalid data', 400);
    }
    const userWithoutPassword: MongoUserWithoutPassword = {
      _id: foundUser._id,
      createdAt: foundUser.createdAt,
      email: foundUser.email,
      updatedAt: foundUser.updatedAt,
      username: foundUser.username,
      __v: foundUser.__v,
    };

    return sendResponse(
      `Welcome ${foundUser.username}`,
      200,
      userWithoutPassword,
    );
  }
}
