import { createClient } from '@supabase/supabase-js'

const URL = 'https://rsoucbyplxlgqvurwbeu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzb3VjYnlwbHhsZ3F2dXJ3YmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTQyNjUsImV4cCI6MTk5NjIzMDI2NX0.qptKZuAy8ZwUin131FaYcw_x5foG6jNgIASsvEEYeyI';
export const supabase = createClient(URL, API_KEY);