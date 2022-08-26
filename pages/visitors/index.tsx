import React from 'react';
import Link from 'next/link';

const Visitor = ({ visitorId = 100 }: { visitorId: string | number }) => {
  return (
    <>
      <Link href='/visitors/2'>
        <a>Visitor 2</a>
      </Link>
      <Link href={`/visitors/${visitorId}`}>
        <a>Visitor {visitorId}</a>
      </Link>
    </>
  );
};

export default Visitor;
