import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const updateRecord = async (table, data, where) => {
  await supabase.from(table).update(data).match(where);
};

export const getTable = async (table) => {
  const { data } = await supabase.from(table).select();
  return data;
};

export const getRecord = async (table, id, value) => {
  const { data } = await supabase.from(table).select().eq(id, value);
  return data?.[0];
};

export const createRecord = async (table, data) => {
  await supabase.from(table).insert(data);
};
