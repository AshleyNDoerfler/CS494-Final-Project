import { Letter } from "@/types/word";

const guessedLettersCache = new Map<string, Letter>();

export function setLetterInCache(letter: Letter) {
  guessedLettersCache.set(letter.name.toLowerCase(), letter);
}

export function getLetterFromCache(name: string): Letter | undefined {
  return guessedLettersCache.get(name.toLowerCase());
}

export function getAllCachedLetters(): Letter[] {
  return Array.from(guessedLettersCache.values());
}

export function clearLetterCache() {
  guessedLettersCache.clear();
}
