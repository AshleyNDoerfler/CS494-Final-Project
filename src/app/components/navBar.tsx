'use client'

import Link from "next/link"

import { AppBar, Toolbar, Typography,  Container } from '@mui/material'

export default function NavBar() {

  return (
    <AppBar position="static">
      <Container>
        {/* Add a logo */}
        <Toolbar disableGutters>
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
                Hangman
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
