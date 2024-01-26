import NotFoundPage from '@/components/global/NotFound';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';

export default function NotFound() {
  return (
    <>
      <NotFoundPage data={NOT_FOUND_DATA} />
    </>
  );
}
