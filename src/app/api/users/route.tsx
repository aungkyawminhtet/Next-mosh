import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    id: 1,
    name: "ak",
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const validation = userSchema.safeParse(data);
  if(!validation.success) return NextResponse.json(validation.error, {status: 400})

  return NextResponse.json({
    data,
  });
}
