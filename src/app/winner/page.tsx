'use client';

import { Box } from '@mui/material'
import Image from 'next/image';

export default function Home() {
  return (
    <Box>
        <h2>Winner XD</h2>
        <Image
            src={`win.jpg`}
            alt={"This cat blessed you since you won"}
            width={500}
            height={500}
        />
    </Box>
  );
}