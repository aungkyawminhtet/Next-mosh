import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRECT});
    console.log("token", token);
    return NextResponse.json(token);
}