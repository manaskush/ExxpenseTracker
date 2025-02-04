import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function GET() {
  const requestHeaders = await headers(); // ✅ Await headers()

  const cookieHeader = requestHeaders.get('cookie'); // Get cookie header
  if (!cookieHeader) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  // Extract token manually
  const token = cookieHeader.split('token=')[1]?.split(';')[0];

  if (!token) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return new Response(JSON.stringify({ userId: decoded.userId }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }
}
