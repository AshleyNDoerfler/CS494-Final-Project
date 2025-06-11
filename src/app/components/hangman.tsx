'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';
import WrongLetterBoard from "./guessedWrongLetters"
import { Box, Grid, Paper, Button, TextField, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Letter, Word } from '@/types/word';
import { setWordInCache } from "@/services/wordCache";
import WordReveal from "./revealWord"

// https://mui.com/material-ui/react-grid/
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
  }));

type HangmanProps = {
    initialWord: Word;
};

export default function Hangman({ initialWord }: HangmanProps) {
    const router = useRouter();
    const [numOfWrongGuesses, setNumOfWrongGuesses] = useState<number>(0)
    const [letter, setLetter] = useState('');
    const [error, setError] = useState(false);
    const [word, setWord] = useState<Word>(initialWord);
    const [wrongLetters, setWrongLetters] = useState<string[] | null>(null)

    const handleGuess = async (letter: string) => {
        if (!word) {
            return
        }
        console.log(letter)

        letter = letter.toLowerCase()
        const pos: number[] = []
        let inWord = false
        const newRevealed = [...word.revealed]

        // Iterate over positions in word.word and check if the letter is in
        for (let i = 0; i < word.word.length; i++) {
            // If letter is in the word
            if (word.word[i].toLowerCase() === letter) {
                pos.push(i)
                inWord = true
                newRevealed[i] = true
            }
        }

        const updatedWord: Word = {
            ...word,
            revealed: newRevealed
        };
        console.log(updatedWord)
        setWord(updatedWord)
        setWordInCache(updatedWord, "active")

        // Set in cache to name: letter, guessed: true, inWord: inWord, positions: pos
        const letterObject: Letter = {
            name: letter,
            guessed: true,
            inWord,
            positions: pos,
        }
        console.log(letterObject)
        await fetch('/api/letterCache', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ letter: letterObject }),
        })
        setLetter('');

        console.log(inWord, " : ", letter, ", num wrong: ", numOfWrongGuesses)
        if (!inWord) {
            const newWrongGuesses = numOfWrongGuesses + 1;
            setNumOfWrongGuesses(newWrongGuesses)
            setWrongLetters(prev => prev ? [...prev, letter.toUpperCase()] : [letter.toUpperCase()]);
            console.log(numOfWrongGuesses)
            if (numOfWrongGuesses + 2 >= 7) {
                console.log("Lose") 
                router.push('/gameover'); 
                return
            }
        } else {
            const revealedCount = newRevealed.filter(val => val).length;
            if(revealedCount == word.word.length){
                console.log("Winner!")
                router.push('/winner'); // Winner works
                return
            }
        }
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLetter(value);
        setError(value.length !== 1 || !/^[a-zA-Z]$/.test(value)); // Only a-z or A-Z allowed
      };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <Item>
                        {/* Photos */}
                        <CardMedia
                            component="img"
                            height={250}
                            image={`/hangman${numOfWrongGuesses}.JPG`}
                            alt="Hangman Image"
                        />
                    </Item>
                    <Item>
                        <WordReveal word={word}/>
                    </Item>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <Item>
                        <WrongLetterBoard wrongLetters={wrongLetters}/>
                    </Item>
                </Grid>
            </Grid>
            <Grid>
                <Item>
                    {/* Make a guess */}
                    <Box display="flex" gap={2} alignItems="center">
                        <TextField
                            id="letter-input"
                            label="Letter"
                            value={letter}
                            onChange={handleChange}
                            error={error}
                            helperText={error ? "Please enter a single letter (A-Z)." : ""}
                            inputProps={{
                                maxLength: 1,
                                inputMode: "text"
                            }}
                        />
                        <Button
                            variant="contained"
                            onClick={() => handleGuess(letter)}
                            disabled={error || letter.length !== 1}
                        >
                            Guess
                        </Button>
                    </Box>
                </Item>
            </Grid>
        </Box>
    )
}