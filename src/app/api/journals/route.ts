import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Journal from "@/models/Journal";
import { uploadToB2 } from "@/lib/b2";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const title = formData.get("title") as string;
        const abstract = formData.get("abstract") as string;
        const keywords = (formData.get("keywords") as string)?.split(",").map(k => k.trim());
        const authors = (formData.get("authors") as string)?.split(",").map(a => a.trim());
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "File is required" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const { url, fileId } = await uploadToB2(buffer, file.name, file.type);

        await connectDB();
        const newJournal = await Journal.create({
            title,
            abstract,
            keywords,
            authors,
            fileUrl: url,
            fileId: fileId,
            submittedBy: (session.user as any).id,
            status: "Pending",
        });

        return NextResponse.json(newJournal, { status: 201 });
    } catch (error: any) {
        console.error("Submission Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search");
        const category = searchParams.get("category");

        let query: any = { status: "Approved" };

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { keywords: { $in: [new RegExp(search, "i")] } },
            ];
        }

        const journals = await Journal.find(query).sort({ createdAt: -1 });
        return NextResponse.json(journals);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
