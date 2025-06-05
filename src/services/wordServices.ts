import { Word } from "@/types/word";

import { getWordFromCache, setWordInCache } from "./wordCache";

// https://random-word-api.vercel.app/api?words=10&letter=z

export async function fetchSomeWords(numOfWords: number, letter: string) {
    const url = `https://random-word-api.vercel.app/api?words=${numOfWords}&letter=${letter}`;
    const r = await fetch(url);
    const data: Word[] = await r.json();

    data.forEach(word => {
        setWordInCache(word);
    });

    return data;
}
