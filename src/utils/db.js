// Minimal local storage based replacements for Supabase database helpers
const DB_KEY = 'local-db';

function getDB() {
  return JSON.parse(localStorage.getItem(DB_KEY) || '{}');
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export const updateRecord = async (table, data, where) => {
  const db = getDB();
  db[table] = db[table] || [];
  db[table] = db[table].map((r) => {
    const match = Object.keys(where).every((k) => r[k] === where[k]);
    return match ? { ...r, ...data } : r;
  });
  saveDB(db);
};

export const getTable = async (table) => {
  const db = getDB();
  return db[table] || [];
};

export const getRecord = async (table, id, value) => {
  const records = await getTable(table);
  return records.find((r) => r[id] === value);
};

export const createRecord = async (table, data) => {
  const db = getDB();
  db[table] = db[table] || [];
  db[table].push(data);
  saveDB(db);
};
