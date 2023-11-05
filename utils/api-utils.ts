import { NextResponse } from 'next/server';

export const sendResponse = (message: string, status: number, data?: any) => {
  return NextResponse.json({ message, status, data });
};

export const sendRequest = async (
  url: string,
  method = 'GET',
  body = null,
  headers = {},
) => {
  try {
    const response = await fetch(url, { method, body, headers });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData);
    }
    return responseData;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || 'An error occurred.');
  }
};
