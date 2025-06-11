'use client'

//////// Please Edit Me ////////

import { Grid, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getLetterFromCache } from '@/services/letterCache';

const StyledItem = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'guessed' && prop !== 'inWord'
})<{ guessed?: boolean; inWord?: boolean }>(({ theme, guessed, inWord }) => {
    let backgroundColor = '#e0e0e0';
    let color = (theme.vars ?? theme).palette.text.primary;

    if (guessed) {
        if (inWord) {
            backgroundColor = '#4caf50'; // green
            color = '#fff';
        } else {
            backgroundColor = '#f44336'; // red
            color = '#fff';
        }
    }

    return {
        backgroundColor,
        color,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        borderRadius: theme.shape.borderRadius,
        ...theme.applyStyles?.('dark', {
            backgroundColor,
        }),
    };
});

const columnOne = ["A", "G", "M", "S", " "];
const columnTwo = ["B", "H", "N", "T", " "];
const columnThree = ["C", "I", "O", "U", "Y"];
const columnFour = ["D", "J", "P", "V", "Z"];
const columnFive = ["E", "K", "Q", "W", " "];
const columnSix = ["F", "L", "R", "X", " "];

const columns = [
    columnOne,
    columnTwo,
    columnThree,
    columnFour,
    columnFive,
    columnSix,
];

export default function LetterBoard() {
    return (
        <Grid container spacing={2}>
            {columns.map((col, colIndex) => (
                <Grid key={colIndex}>
                    <Stack spacing={1}>
                        {col.map((letter, letterIndex) => {
                            const trimmed = letter.trim();
                            const l = trimmed.toLowerCase();
                            const cached = getLetterFromCache(l);
                            const guessed = cached?.guessed || false;
                            const inWord = cached?.inWord || false;

                            return (
                                <StyledItem
                                    key={letterIndex}
                                    guessed={guessed}
                                    inWord={inWord}
                                >
                                    {trimmed || "\u00A0"}
                                </StyledItem>
                            );
                        })}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
