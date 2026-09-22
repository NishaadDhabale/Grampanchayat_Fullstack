import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sbyfefqtlecbmdxkzzeq.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWZlZnF0bGVjYm1keGt6emVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjAzMzQsImV4cCI6MjA3NTkzNjMzNH0.A7wrmooUipkSfIu50mQn3hSqsTQsetNJvu-7W-nPbyY'

// Debug logging
console.log('Environment variables loaded:');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing');
console.log('Final Supabase URL:', supabaseUrl);
console.log('Final Supabase Key:', supabaseAnonKey ? 'Present' : 'Missing');

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Storage bucket name for gallery images
export const GALLERY_BUCKET = 'village-gallery'
