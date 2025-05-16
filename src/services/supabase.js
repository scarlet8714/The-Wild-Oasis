import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tieecsqvbzrhaugiudha.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZWVjc3F2YnpyaGF1Z2l1ZGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTE1OTIsImV4cCI6MjA2MjMyNzU5Mn0.1eJy6oK2EIZaNCBPLke7CH2Vulw4bR0WtORR1bSwWoQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
