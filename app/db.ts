import * as SQLite from 'expo-sqlite';

const dbPromise = SQLite.openDatabaseAsync('events.db');

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

export const createTable = async () => {
  const db = await dbPromise;
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT, 
      date TEXT, 
      time TEXT, 
      description TEXT
    );
  `);
};

export const addEvent = async (name: string, date: string, time: string, description: string) => {
  const db = await dbPromise;
  await db.runAsync(
    'INSERT INTO events (name, date, time, description) VALUES (?, ?, ?, ?);',
    [name, date, time, description]
  );
};

export const getEvents = async () => {
  const db = await dbPromise;
  const result = await db.getAllAsync('SELECT * FROM events;');
  return result;
};
