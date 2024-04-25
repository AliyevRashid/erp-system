import { connectToDatabase } from "../../database/database";
import { NextResponse } from 'next/server';

export default async function post(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const db = await connectToDatabase();
      const collection = db.collection('users');
      const user = await collection.findOne({ email, password });

      if (user) {
        return NextResponse.json({ user });
      } else {
        return NextResponse.json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      return NextResponse.json({ message: 'Internal server error' });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}
