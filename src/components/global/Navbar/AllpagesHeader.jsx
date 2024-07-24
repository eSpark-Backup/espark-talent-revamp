'use client';
import React from 'react';
import routes from '@/constants/routes';
import { BOOK_A_DEMO, HIRE_A_TALENT_LINK } from '@/constants/global/header';
import Topbar from './Topbar';
import { usePathname } from 'next/navigation';
import DefaultNavbar from './DefaultNavbar';

const AllpagesHeader = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== '/book-a-demo' &&
        pathName !== '/demo' &&
        pathName !== '/thankyou' &&
        pathName !== '/book-a-meeting' &&
        pathName !== '/hire-a-frontend-developer' &&
        pathName !== '/hire-a-frontend-developer' &&
        pathName !== '/hire-remote-developers' &&
        pathName !== '/book-a-demo-meeting' && (
          <>
            <Topbar />
            <DefaultNavbar
              routes={routes}
              pathName={pathName}
              sticky
              action={{
                type: 'external',
                route: HIRE_A_TALENT_LINK,
                label: BOOK_A_DEMO,
                color: 'info',
                style: {
                  border: '1.145px solid #222',
                  borderRadius: '5.727px',
                  '&:hover': {
                    background: '#029894',
                    color: '#fff',
                    border: '1.145px solid #029894',
                  },
                  color: '#222',
                  textAlign: 'center',
                  fontSize: '17.766px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '27.49px',
                  padding: '11px 20px 9px 20px',
                  alignItems: 'center',
                },
              }}
            />
          </>
        )}
    </>
  );
};

export default AllpagesHeader;
