export type Letter = {
    name: string, // limit to one character
    inWord: boolean,
    positions: number[]
}

// Make an array, alphabet, of all the letters to
// search for letter to see if its in the word or not

// When a word is selected, I will have to initialize 
// the alphabet