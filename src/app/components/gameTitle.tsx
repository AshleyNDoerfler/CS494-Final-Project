'use client';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { Card, Box, CardContent, Typography, Button, CardHeader, CardMedia, CardActions } from '@mui/material'

export default function TitleScreen() {

    return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
            }}
        >
            <Card sx={{ 
                maxWidth: 700,
                textAlign: 'center'
            }}>
                <CardHeader
                    title={
                        <Typography variant="h3" component="div">
                            Hangman
                        </Typography>
                    }
                />
                <CardMedia
                    component="img"
                    height="300"
                    image="/hangman.jpg"
                    alt="Hangman image"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        &quot;Hangman is a guessing game for two or more players. One player thinks of a word, phrase, or sentence and the other(s) tries to guess it by suggesting letters or numbers within a certain number of guesses. Originally a paper-and-pencil game, there are now electronic versions.&quot;
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <MuiLink component={Link} href='https://en.wikipedia.org/wiki/Hangman_(game)' target="_blank" rel="noopener noreferrer">
                            Wikipedia - Hangman (Game)
                        </MuiLink>
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center', width: '100%'}}>
                    <Button variant="contained" color='violet' href="/game">Start Game</Button>
                    {/* Check if I can nav that way or if I have to use link */}
                </CardActions>
            </Card>
        </Box>
    )
}