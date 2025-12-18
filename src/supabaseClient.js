import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ramfhghgzcnylvbnrqze.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhbWZoZ2hnemNueWx2Ym5ycXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5OTU0MTQsImV4cCI6MjA4MTU3MTQxNH0.ghjrEaiGlwka63MOqA5L-b59mdLlusO34HaWi_GYSTw'

export const supabase = createClient(supabaseUrl, supabaseKey)