'use client';

import routes from '@/constants/global/routes';
import {
  EXCLUDED_PATHS,
  HIRE_A_TALENT_LINK,
  REQUEST_CANDIDATE,
} from '@/constants/global/header';
import Topbar from '@/components/global/navbar/Topbar';
import { usePathname } from 'next/navigation';
import DefaultNavbar from '@/components/global/navbar/DefaultNavbar';
import { TOP_BAR_DATA } from '@/constants/new-home/homepage';

const AllpagesHeader = () => {
  const pathName = usePathname();

  const shouldShowHeader = !EXCLUDED_PATHS?.includes(pathName);

  return shouldShowHeader ? (
    <>
      <Topbar data={TOP_BAR_DATA} />
      <DefaultNavbar
        routes={routes}
        pathName={pathName}
        sticky
        action={{
          type: 'external',
          route: HIRE_A_TALENT_LINK,
          label: REQUEST_CANDIDATE,
        }}
      />
    </>
  ) : null;
};

export default AllpagesHeader;
