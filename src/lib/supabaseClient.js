import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from "$env/static/private";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
    auth: { persistSession: false }
});
