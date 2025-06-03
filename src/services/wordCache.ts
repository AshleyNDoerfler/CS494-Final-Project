import { Letter } from "@/types/letter"

// map variable
const cachedLetter = new Map<string, Letter>();

// setLetterInCache
export function setLetterInCache(url: string, letter: Letter){
    cachedLetter.set(url, letter)
}

// getLetterFromCache
export function getLetterFromCache(url: string) {
    return cachedLetter.get(url)
}