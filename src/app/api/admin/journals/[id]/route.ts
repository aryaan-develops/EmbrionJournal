import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Journal from "@/models/Journal";

export async function PATCH(
    req: NextRequest,
    { params }: any
) {
    try {
        const { id } = await params;
        const session = await getServerSession(authOptions);
        if (!session || (session.user as any).role !== "Admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { status } = await req.json();
        if (!["Approved", "Rejected"].includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }

        await connectDB();
        const journal = await Journal.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!journal) {
            return NextResponse.json({ error: "Journal not found" }, { status: 404 });
        }

        return NextResponse.json(journal);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
