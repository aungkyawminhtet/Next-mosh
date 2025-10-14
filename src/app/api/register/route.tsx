import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "../users/schema";
import { prisma } from "../../../../prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = registerSchema.safeParse(body);

    if(!validation.success) return NextResponse.json(validation.error, {status: 400});
    
    const user = await prisma.user.findUnique({
        where: {email: body.email}
    });

    if (user) return NextResponse.json({message: "User already exists"}, {status: 400});
    
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hahedPassword: hashedPassword,
        }
    });

    return NextResponse.json(newUser, {status: 200});
}