'use client';

import { Box } from '@mui/material'
import Image from 'next/image';

export default function Home() {
  return (
    <Box>
        <h2>loser :p</h2>
        <Image
            src={'/lose.jpg'}
            alt={"This cat will eat ou cause you lost"}
            width={500}
            height={500}
        />
    </Box>
  );
}