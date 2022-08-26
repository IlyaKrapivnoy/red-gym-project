import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { navItems } from '../../../../data/Header';
import { INavbar } from '../../../../types/ui';

const Navbar = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map(({ title, href, id }: INavbar) => (
        <Button key={id} sx={{ color: '#fff' }}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;
