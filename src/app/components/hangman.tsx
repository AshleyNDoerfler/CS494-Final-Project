import { useState } from "react";
import WrongLetterBoard from "./guessedWrongLetters"
import GuessLetters from "./guessLetter"
import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';

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

export default function Hangman() {
    const [numOfWrongGuesses, setNumOfWrongGuesses] = useState<number>(0)

    const handleGuess = (letter: string) => {
        console.log(letter)
        // Update state based on guess
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <Item>
                        {/* Photos */}
                        {/* Reveal word */}
                    </Item>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <Item>
                        <GuessLetters onGuess={handleGuess} />
                    </Item>
                </Grid>
            </Grid>

        </Box>
    )
}