'use client'

import Link from "next/link"
import Image from 'next/image'

import { AppBar, Toolbar, Typography,  Container } from '@mui/material'

export default function NavBar() {

  return (
    <AppBar position="static" color="secondary">
      <Container>
        <Toolbar disableGutters>
          <Image 
            src="/hangman.jpg" 
            alt="Hangman logo"
            width={40}
            height={40}
            style={{ borderRadius: '50%', marginRight: '8px' }}
          />

          <Link href="/" style={{color: "#fff", textDecoration: 'none'}}>
            <Typography
                variant="h6"
                noWrap
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                
                }}
            >
                Home
            </Typography>
          </Link>

          <Link href="/game" style={{color: "#fff", textDecoration: 'none'}}>
            <Typography
                variant="h6"
                noWrap
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                }}
            >
                Hangman
            </Typography>
          </Link>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
