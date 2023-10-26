import { NextResponse } from 'next/server';

export const sendResponse = (message: string, status: number, data?: any) => {
  return NextResponse.json({ message, status, data });
};
