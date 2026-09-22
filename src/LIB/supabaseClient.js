

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = " https://hpnhsthfvtxojyyslikj.supabase.co ";
const supabaseKey = " sb_publishable_MFGdVvaJsAcuslCLRUTVTg_v1M9n7SR";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);