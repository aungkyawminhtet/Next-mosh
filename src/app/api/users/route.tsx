import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "./schema";
import { prisma } from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  // console.log("object", users);
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user, { status: 200 });
}
