import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { VISITORS } from '../../paths';

const VisitorId = () => {
  const router = useRouter();
  const visitorId = router.query.visitorId;

  return (
    <>
      <h2>Detail about the visitor #{visitorId}</h2>
      <Button
        size='small'
        variant='outlined'
        startIcon={<KeyboardReturnIcon />}
      >
        <Link href={VISITORS}>
          <a>get back</a>
        </Link>
      </Button>
    </>
  );
};

export default VisitorId;
