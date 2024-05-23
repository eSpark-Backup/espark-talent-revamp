import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yqreqbniaknjhpcmyzuy.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcmVxYm5pYWtuamhwY215enV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMDcyODYsImV4cCI6MjAzMDU4MzI4Nn0.ZbBqJ3rg2r1x0h0ncrXtKRTaCAgjUZ3zYdv3PzEGT04'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase