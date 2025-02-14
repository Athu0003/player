require('dotenv').config();
const express = require('express');
const app = express();
const playerRoutes = require('./routes/playerRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/players', playerRoutes);

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
