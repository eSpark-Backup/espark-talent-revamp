import { NextResponse } from 'next/server';

export const middleware = (request) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('next-url', request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
