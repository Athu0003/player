const db = require('../models/PlayerModel');

const readPlayers = (req, res) => {

  console.log("Getplayer api is called....")
  
  const sql = 'SELECT * FROM players';

  db.query(sql, (err, result) => {

    if (err) {
      console.error('Error fetching players:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(result);
    
  });
};

module.exports = readPlayers;
