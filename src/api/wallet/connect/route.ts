import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/auth";

// ICP Wallet Connection
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session?.user?.id) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const { walletAddress, walletType } = await request.json();

        if (!walletAddress) {
            return NextResponse.json(
                { message: "Wallet address is required" },
                { status: 400 }
            );
        }

        // Update user with wallet information
        await prisma.user.update({
            where: { id: session.user.id },
            data: {
                walletAddress,
                walletType: walletType || "ICP",
            },
        });

        console.log("[WALLET] Wallet connected:", { userId: session.user.id, walletAddress, walletType });
        
        return NextResponse.json(
            { message: "Wallet connected successfully" },
            { status: 200 }
        );
    } catch (e) {
        console.log("[WALLET] Something went wrong", e);
        return NextResponse.json(
            { message: "Internal error" },
            { status: 500 }
        );
    }
} 