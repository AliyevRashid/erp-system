import { useEffect } from 'react';
import { connectToDatabase, insertInitialUsers } from '../app/database/database';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    async function initializeDatabase() {
      try {
       // const db = await connectToDatabase();
       const db = await connectToDatabase();

      // Удаляем базу данных
        await db.dropDatabase();
        await insertInitialUsers();
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    }
    initializeDatabase();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
