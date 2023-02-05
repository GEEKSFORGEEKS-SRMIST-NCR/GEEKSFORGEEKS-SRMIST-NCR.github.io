import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gkgravircmuxabjjipmf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZ3JhdmlyY211eGFiamppcG1mIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTk0MDc0NCwiZXhwIjoxOTc3NTE2NzQ0fQ.dErH1omS3-ascM90eNoxgJ1uIAZWIjLu2hIpwnlDuU4";

// const supabaseUrl = process.env.GATSBY_SUPABASE_URL;
// const supabaseKey = process.env.GATSBY_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
