import Hangman from "../components/hangman";
import { fetchSomeWords } from "@/services/wordServices";
import { Word } from "@/types/word";
import { setWordInCache } from "@/services/wordCache";

function getRandomLetter(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}

export default async function GamePage() {
  const randomLetter = getRandomLetter();
  const words: Word[] = await fetchSomeWords(1, randomLetter);

  if (words.length === 0) {
    return <div>Failed to fetch a word. Please try again.</div>;
  }

  const word = words[0];

  // Cache the word on the server (optional; useful if server-side game logic is needed)
  setWordInCache(word, "current");

  return <Hangman initialWord={word} />;
}
