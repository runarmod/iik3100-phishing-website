import { createClient } from "@supabase/supabase-js";
import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from "$env/static/private";

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
    auth: { persistSession: false }
});
