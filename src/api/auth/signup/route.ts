import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            console.log("[SIGNUP] Missing field:", { name, email, password });
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where : {email}
        });

        if (existingUser) {
            console.log("[SIGNUP] User already exists:", email);
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );
        }

        // Password hashing -> 16 rounds
        const hashedPassword = await bycrpt.hash(password, 16);

        // Buat user baru
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        console.log("[SIGNUP] User created:", email);
        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );
    } catch (e) {
        console.log("[SIGNUP] Something went wrong", e);
        return NextResponse.json (
            { message: "Internal error" },
            { status: 500 }
        );
    }
}
