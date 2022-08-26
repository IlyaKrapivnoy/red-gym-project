import React from 'react';
import { useRouter } from 'next/router';

const VisitorId = () => {
  const router = useRouter();
  const visitorId = router.query.visitorId;

  return <h2>Detail about the visitor #{visitorId}</h2>;
};

export default VisitorId;
