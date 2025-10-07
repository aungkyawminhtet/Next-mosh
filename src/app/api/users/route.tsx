import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({
        id: 1, name: "ak"
    });
}

export async function POST(request:NextRequest) {
    return NextResponse.json({
        msg: "this is post method"
    });
}