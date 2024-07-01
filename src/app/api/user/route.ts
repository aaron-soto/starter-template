import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, image } = await request.json();
  await connectMongoDB();
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    await existingUser.incrementLogins();
  } else {
    let role;
    if (email === 'aaron.m.soto1@gmail.com') {
      role = 'dev';
    } else {
      role = 'user';
    }
    await User.create({ name, email, image, role });
  }
  return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
}