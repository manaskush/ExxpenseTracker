import dbConnect from '../../../../utils/db';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();
  // console.log("email, password ",email, password )
  try {
    const user = await User.findOne({ email });
    // console.log("user ",user )
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log("isMatch ",isMatch )

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // console.log("token ",token )

    const response = NextResponse.json({ success: true,userId: user._id, email: user.email });
    response.cookies.set('token', token, { httpOnly: true, path: '/', maxAge: 3600 });
    // console.log("response ",response )

    return response;
  } catch (error) {
    // console.log("err",error)
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}