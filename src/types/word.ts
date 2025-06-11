export type Letter = {
    name: string; // limit to one character
    guessed: boolean;
    inWord: boolean;
    positions: number[];
}
  
export type Word = {
    word: string;
    revealed: boolean[];
    numOfGuessedLetters: number;
    guessedLetters: string[];
};