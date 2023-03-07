import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import { HOME } from '../../../../paths';

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        className='flex h-24 justify-center bg-slate-900'
      >
        <Toolbar className='flex justify-between'>
          <Link href={HOME}>
            <a>
              <Image
                src='/logo.png'
                alt='Picture of the author'
                width={218}
                height={28}
              />
            </a>
          </Link>

          <Navbar />
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
