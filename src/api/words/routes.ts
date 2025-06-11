import { NextRequest, NextResponse } from "next/server";
import { fetchSomeWords } from "@/services/wordServices";
import { setWordInCache } from "@/services/wordCache";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const numOfWords = parseInt(searchParams.get("count") || "1");
    const letter = searchParams.get("letter") || "";

    try {
        const words = await fetchSomeWords(numOfWords, letter);
        if (words.length > 0) {
            setWordInCache(words[0], "active");
        }
        return NextResponse.json({ words });
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch words" }, { status: 500 });
    }
}
