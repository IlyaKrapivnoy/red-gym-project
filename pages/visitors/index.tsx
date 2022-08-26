import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const Visitor = ({ visitorId = 100 }: { visitorId: string | number }) => {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        Our best visitors:
      </Typography>
      <ul>
        <li>
          <Link href='/visitors/1'>
            <a>Visitor 1</a>
          </Link>
        </li>
        <li>
          <Link href='/visitors/2'>
            <a>Visitor 2</a>
          </Link>
        </li>
        <li>
          <Link href={`/visitors/${visitorId}`}>
            <a>Visitor {visitorId}</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Visitor;
