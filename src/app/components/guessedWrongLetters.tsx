'use client';

import { Stack, Paper } from '@mui/material';

type WrongLetterBoardProps = {
    wrongLetters: string[] | null;
};

export default function WrongLetterBoard({ wrongLetters }: WrongLetterBoardProps) {
    if (!wrongLetters || wrongLetters.length === 0) {
        return <div>No wrong guesses yet.</div>;
    }

    return (
        <Stack direction="row" spacing={1} flexWrap="wrap" maxWidth={240}>
            {wrongLetters.map((letter) => (
                <Paper
                    key={letter}
                    elevation={2}
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f44336',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1,
                        fontWeight: 'bold',
                        userSelect: 'none',
                    }}
                >
                    {letter}
                </Paper>
            ))}
        </Stack>
    );
}
