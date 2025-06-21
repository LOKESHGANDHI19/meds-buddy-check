import { createClient } from "@supabase/supabase-js";
// import { create } from "domain";

const supabaseUrl = "https://qwshvdoaidsbaudavroi.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3c2h2ZG9haWRzYmF1ZGF2cm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjA3NjYsImV4cCI6MjA2NTk5Njc2Nn0.WAdehvOTwpHFzQG7eyLjWACoS-EDAmcKFqOwP0EDNec";

const supabase = createClient(supabaseUrl, supabaseAnonkey);
export default supabase;
