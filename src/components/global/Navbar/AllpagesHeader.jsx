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
                  pl: 3,
                  pr: 1.5,
                  fontSize: '17px',
                  borderRadius: '36px',
                  '&:hover': {
                    backgroundColor: '#029894',
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
