import { Word } from "@/types/word";

const cachedWords = new Map<string, Word>();

export function setWordInCache(word: Word, key: string = word.word) {
    cachedWords.set(key, word);
}

export function getWordFromCache(key: string): Word | undefined {
    return cachedWords.get(key);
}

