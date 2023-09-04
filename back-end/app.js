const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`App listening on port ${port}!`))


// database connection
let db = new sqlite3.Database('../data/emoji.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the emojis database.');
});

// get all data from the database
app.get('/emojis', (req, res) => {
  
  db.all("SELECT * FROM emojis", [], (err, rows) => {
      if(err){
          throw err;
      }
      res.json(rows);
  });
});