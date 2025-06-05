import { createClient } from '@supabase/supabase-js';

const supabaseUrl =import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabaseUrl = process.env.VITE_SUPABASE_URL;

// 👇 Logs para depurar
console.log('✅ SUPABASE URL:', supabaseUrl);
console.log('✅ SUPABASE KEY:', supabaseAnonKey ? '[CLAVE DETECTADA]' : '❌ NO DETECTADA');

// Si faltan valores, lanza error para que no avance
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("❌ Faltan variables de entorno VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
