import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!user)
    return NextResponse.json({ msg: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user)
    return NextResponse.json({ msg: "User not found" }, { status: 404 });
  await prisma.user.delete({
    where: { id },
  });
  return NextResponse.json({ msg: "User deleted" }, { status: 200 });
}
