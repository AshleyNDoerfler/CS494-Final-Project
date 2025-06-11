'use client';

import { Box, CardMedia } from '@mui/material'

export default function Home() {
  return (
    <Box>
        <h2>loser :p</h2>
        
        <CardMedia
            component="img"
            image={'/lose.jpg'}
            alt={"This cat will eat ou cause you lost"}
            height={500}
        />
    </Box>
  );
}