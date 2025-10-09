import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import { prisma } from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  
  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(product, { status: 200 });
}
