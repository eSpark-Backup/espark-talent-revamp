import { NextResponse } from 'next/server';

/**
 * Middleware function to modify the request headers.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @returns {NextResponse} - The response object with updated request headers.
 *
 * This middleware adds a custom header `next-url` to the request headers,
 * containing the URL of the incoming request.
 */
export function middleware(request) {
  const requestHeaders = new Headers(request?.headers);
  requestHeaders?.set('next-url', request?.url);

  return NextResponse?.next({
    request: {
      headers: requestHeaders,
    },
  });
}
