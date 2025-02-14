const db = require('../models/PlayerModel');

const deletePlayer = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM players WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting player:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Player deleted successfully' });
  });
};

module.exports = deletePlayer;
