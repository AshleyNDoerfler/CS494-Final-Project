import { NextRequest, NextResponse } from "next/server";
import { fetchSomeWords } from "@/services/wordServices";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const numOfWords = parseInt(searchParams.get("count") || "1");
    const letter = searchParams.get("letter") || "";

    try {
        const words = await fetchSomeWords(numOfWords, letter);
        return NextResponse.json({ words });
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch words" }, { status: 500 });
    }
}
