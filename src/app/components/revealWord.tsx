'use client'

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Word } from '@/types/word';

type Props = {
    word: Word;
};


export default function WordReveal({ word }: Props) {
    return (
        <Box sx={{ fontSize: '2rem', letterSpacing: 2, fontFamily: 'monospace' }}>
            {word.word.split('').map((char, i) => (
                <span key={i} style={{ marginRight: '8px' }}>
                    {word.revealed[i] ? char.toUpperCase() : '_'}
                </span>
            ))}
        </Box>
    );
}