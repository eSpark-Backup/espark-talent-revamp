'use client';
import React from 'react';
import routes from '@/constants/routes';
import {
  HIRE_A_TALENT_LINK,
  Request_Candidate,
} from '@/constants/global/header';
import Topbar from './Topbar';
import { usePathname } from 'next/navigation';
import DefaultNavbar from './DefaultNavbar';
import { TOP_BAR_DATA } from '@/constants/homepage';

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
            <Topbar data={TOP_BAR_DATA} />
            <DefaultNavbar
              routes={routes}
              pathName={pathName}
              sticky
              action={{
                type: 'external',
                route: HIRE_A_TALENT_LINK,
                label: Request_Candidate,
                color: '#fff',
                style: {
                  width: '246px',
                  height: '44px',
                  background: '#029894',
                  justifyContent: 'space-between',
                  color: '#fff',
                  pl: 2.5,
                  pr: 1.5,
                  borderRadius: '36px',
                  '&:hover': {
                    backgroundColor: '#029894',
                    boxShadow:
                      '0px 5.63px 4.65px 0px #1DD6D1 inset, -4.23px 0px 5.63px 0px #217A78 inset, 0px 10px 10px 0px #00000029',
                    background: '#029894',
                    color: '#fff',
                  },
                },
              }}
            />
          </>
        )}
    </>
  );
};

export default AllpagesHeader;
