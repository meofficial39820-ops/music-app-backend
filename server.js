const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// --- YOUR SUPABASE KEYS (Moved to Backend) ---
const SUPABASE_URL = 'https://nyticjkqaerwsudyexmz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55dGljamtxYWVyd3N1ZHlleG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTQ0NjEsImV4cCI6MjA4Mjc3MDQ2MX0.VNwD40extEiMLuUzVK08OuAgvhTmqJn6ITlMiao7ZMU';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Route to get all songs
app.get('/api/songs', async (req, res) => {
  try {
    const { data, error } = await supabase.from('tracks').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('✅ Backend Server is running on http://localhost:5000');
});