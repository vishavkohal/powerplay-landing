// app/api/go/[slug]/route.js

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  const isGoogleBot = /googlebot|adsbot-google|google-inspectiontool/.test(userAgent);

  // Define your encoded URLs here
  const destinations = {
    '1win': 'http://1wrxly.life/casino/list?open=register',
  };

  const destination = destinations[params.slug];

  if (!destination) {
    return NextResponse.redirect('https://example.com/404', 302);
  }

  if (isGoogleBot) {
    // Redirect bot to safe page (optional)
    return NextResponse.redirect('https://example.com', 302);
  }

  // Real user, redirect to real destination
  return NextResponse.redirect(destination, 302);
}
