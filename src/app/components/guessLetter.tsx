'use client'

import * as React from 'react';
import { TextField, Box, Button } from '@mui/material';

import { Letter } from "@/types/word";
import { setLetterInCache, getLetterFromCache } from "@/services/letterCache";

type GuessLettersProps = {
  onGuess: (letter: string) => void;
};

export default function GuessLetters({ onGuess }: GuessLettersProps) {
  const [letter, setLetter] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLetter(value);
    setError(value.length !== 1 || !/^[a-zA-Z]$/.test(value)); // Only a-z or A-Z allowed
  };

  const handleGuess = () => {
    const normalized = letter.toLowerCase();

    if (!error && /^[a-z]$/.test(normalized)) {
      if (getLetterFromCache(normalized)) {
        setError(true); // Already guessed
        return;
      }

      const guessedLetter: Letter = {
        name: normalized,
        guessed: true,
        inWord: false,
        positions: [],
      };

      setLetterInCache(guessedLetter);
      onGuess(normalized);
      setLetter('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
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
      <Button variant="contained" onClick={handleGuess}>
        Guess
      </Button>
    </Box>
  );
}
