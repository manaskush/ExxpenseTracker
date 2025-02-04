export async function POST() {
    const response = new Response(JSON.stringify({ message: 'Logged out' }), { status: 200 });
    response.cookies.set('token', '', { httpOnly: true, path: '/', maxAge: 0 });
    return response;
  }