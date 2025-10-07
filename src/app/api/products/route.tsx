import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      msg: "This is all products",
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

  return NextResponse.json({
    data: body,
  });
}
