import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

interface VisitorProps {
  visitorId?: string | number;
}

const Visitor = ({ visitorId = 100 }: VisitorProps) => {
  const visitors = [
    { id: 1, name: 'Visitor 1' },
    { id: 2, name: 'Visitor 2' },
    { id: visitorId, name: `Visitor ${visitorId}` },
  ];

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Our best visitors:
      </Typography>
      <ul>
        {visitors.map((visitor) => (
          <li key={visitor.id}>
            <Link href={`/visitors/${visitor.id}`}>
              <a>{visitor.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Visitor;
