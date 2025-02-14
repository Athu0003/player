const db = require('../models/PlayerModel');

const updatePlayer = (req, res) => {
  const { id } = req.params;
  const { name, age, team, position } = req.body;
  const sql = 'UPDATE players SET name = ?, age = ?, team = ?, position = ? WHERE id = ?';
  db.query(sql, [name, age, team, position, id], (err, result) => {
    if (err) {
      console.error('Error updating player:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Player updated successfully' });
  });
};

module.exports = updatePlayer;
