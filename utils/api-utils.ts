import { NextResponse } from 'next/server';

export const sendResponse = (message: string, status: number) => {
  return NextResponse.json({ message, status });
};
