import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/mydatabase';

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();
  cachedDb = db;
  return db;
}

export async function insertInitialUsers() {
  const db = await connectToDatabase();
  const collection = db.collection('users');

  const users = [
    {
      id: 1,
      email: "john@example.com",
      name: "John Doe",
      password: "password1"
    },
    {
      id: 2,
      email: "alice@example.com",
      name: "Alice Smith",
      password: "password2"
    },
    {
      id: 3,
      email: "bob@example.com",
      name: "Bob Johnson",
      password: "password3"
    }
  ];

  await collection.insertMany(users);
}
