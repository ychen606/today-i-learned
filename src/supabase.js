import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yjewzxpotaytktdtgxns.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZXd6eHBvdGF5dGt0ZHRneG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3OTQ4MDEsImV4cCI6MjA0MDM3MDgwMX0.QkZi2pPNkP8g8TpJoZqqYI3hByz4oUdVK02ABHuP5z0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
