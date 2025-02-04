import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create a response object
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' });

    // Clear the token cookie
    response.cookies.set('token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0, // Expire the cookie immediately
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error', error: error.message }, { status: 500 });
  }
}