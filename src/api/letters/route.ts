import { NextRequest, NextResponse } from "next/server";
import { setLetterInCache } from "@/services/letterCache";
import { Letter } from "@/types/word";

export async function POST(req: NextRequest) {
    try {
        const { letter }: { letter: Letter } = await req.json();

        if (!letter?.name || typeof letter.guessed !== "boolean" || typeof letter.inWord !== "boolean" || !Array.isArray(letter.positions)) {
            return NextResponse.json({ error: "Invalid letter format" }, { status: 400 });
        }

        setLetterInCache(letter);

        return NextResponse.json({ success: true, letter });
    } catch {
        return NextResponse.json({ error: "Failed to set letter in cache" }, { status: 500 });
    }
}