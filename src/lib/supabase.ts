import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://blnsznhqlkpgirxfiljo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbnN6bmhxbGtwZ2lyeGZpbGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMjk2MTcsImV4cCI6MjA5NTYwNTYxN30.ZteofDMWelHJtecdeKmHMQa1WbpU3obRXsRdVX6QTCM'

export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}
