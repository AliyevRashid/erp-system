import { connectToDatabase} from "../../../../database/database";
import { NextResponse } from 'next/server';


export async function POST(req,res){
  console.log("Hello from Api");
  const data = await req.json();
  console.log(data);
  const { userEmail, userPassword } = data;
  try {
    console.log(userEmail+' '+userPassword);
    const db = await connectToDatabase();
    const collection = db.collection('users');
    const users = await collection.find().toArray();
    console.log(users);
    const user = await collection.findOne({ email:userEmail, password:userPassword });

    if (user) {
      return NextResponse.json({ user });
    } else {
      console.clear()
      return NextResponse.json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error signing in:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }

}
