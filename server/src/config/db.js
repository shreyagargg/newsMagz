import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
)

console.log("URL:", process.env.SUPABASE_URL);
console.log("KEY:", process.env.SUPABASE_PUBLISHABLE_KEY);