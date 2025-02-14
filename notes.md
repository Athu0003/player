const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // No space before root
  password: 'Sahil@1717',   // Wrapped in quotes
  database: 'db_test'
});

// Connect and check the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL as ID:', connection.threadId);
});
