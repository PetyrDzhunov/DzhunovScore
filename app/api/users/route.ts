import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SALT_COUNT } from '@/constants/constants';
import { sendResponse } from '@/utils/api-utils';
import { AuthActions, AuthenticationRequestData } from '@/types/generic-types';

// export async function POST(request: NextRequest) {
//   const { username, email, password, action }: AuthenticationRequestData =
//     await request.json();

//   await connectMongoDB();
// 	if(action === AuthActions.Register) {
// 		const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
// 		const foundUser = await getOneUserByEmail(email);
// 		if (foundUser) {
// 			return sendResponse('User with same email already exists!', 400);
// 		}

// 		try {
// 			await User.create({ username, email, password: hashedPassword });
// 			return sendResponse('User created successfully!', 201);
// 		} catch (err) {
// 			return sendResponse('Failed to create user!', 401);
// 		}
// 	}
// }

export const getOneUserByEmail = async (email: string) => {
  const foundUser = User.findOne({ email });
  return foundUser;
};
