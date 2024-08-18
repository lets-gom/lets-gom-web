import { createClient } from '@supabase/supabase-js';

import { Database } from '@/frameworks/supabase/types';

export default createClient<Database>(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_API_KEY,
);
