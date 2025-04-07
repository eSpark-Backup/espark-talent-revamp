import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
/**
 * The anonymous key for accessing the Supabase client.
 * This key is retrieved from the environment variable `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
 *
 * @constant {string} supabaseAnonKey - The public anonymous key for Supabase.
 */
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
