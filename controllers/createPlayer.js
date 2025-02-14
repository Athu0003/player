const db = require('../models/PlayerModel');

const createPlayer = (req, res) => {
  const { name, age, team, position } = req.body;
  const sql = 'INSERT INTO players (name, age, team, position) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, age, team, position], (err, result) => {
    if (err) {
      console.error('Error creating player:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Player created successfully', playerId: result.insertId });
  });
};

module.exports = createPlayer;
