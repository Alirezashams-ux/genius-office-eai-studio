import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && anon ? createClient(url, anon) : null;

/**
 * In demo mode (no env vars), the site runs fully read-only.
 * Connect Supabase later to enable auth + submissions.
 */
