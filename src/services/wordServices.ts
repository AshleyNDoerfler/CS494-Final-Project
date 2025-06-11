import { Word } from "@/types/word";

import { setWordInCache } from "./wordCache";

// https://random-word-api.vercel.app/api?words=10&letter=z

function transformToWordObject(raw: string): Word {
    return {
        word: raw,
        revealed: Array(raw.length).fill(false),
        numOfGuessedLetters: 0,
    };
  }
  
export async function fetchSomeWords(numOfWords: number, letter: string) {
    const url = `https://random-word-api.vercel.app/api?words=${numOfWords}&letter=${letter}`
    const r = await fetch(url)
    const rawWords: string[] = await r.json()
  
    const data: Word[] = rawWords.map(transformToWordObject)
  
    data.forEach(word => {
        setWordInCache(word)
    });

    console.log(data)
  
    return data
}
