import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  if (id > 20)
    return NextResponse.json(
      {
        error: "Id should be less than 20",
      },
      { status: 400 }
    );

  return NextResponse.json({
    id,
    name: "ak",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const { id } = await params;
  if (!body.name)
    return NextResponse.json(
      {
        error: "Name is required",
      },
      { status: 400 }
    );
  if (id > 10)
    return NextResponse.json(
      {
        error: "Id should be less than 10",
      },
      { status: 400 }
    );
  return NextResponse.json(
    {
      id,
      name: body.name,
    },
    { status: 200 }
  );
}
