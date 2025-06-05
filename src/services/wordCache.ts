import { Word } from "@/types/word"

// map variable
const cachedWord = new Map<Word>();

// setWordInCache
export function setWordInCache(word: Word){
    cachedWord.set(word)
}

// getWordFromCache
export function getWordFromCache(url: string) {
    return cachedWord.get(url)
}