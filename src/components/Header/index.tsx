import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        className='flex h-24 justify-center bg-slate-900'
      >
        <Toolbar className='flex justify-between'>
          <Image
            className='cursor-pointer'
            src='/logo.png'
            alt='Picture of the author'
            width={218}
            height={28}
          />
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
