import { NextResponse } from "next/server";

export const sendResponse = (message: string, status: number) => {
    console.log('here')
    return NextResponse.json({ message }, { status });
}