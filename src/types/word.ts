import { Letter } from './letter'

export type Word = {
    word: string;
    revealed: boolean[];
    numOfGuessedLetters: number;
}

// IDK if I need this one