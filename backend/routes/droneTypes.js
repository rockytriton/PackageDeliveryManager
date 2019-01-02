var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  user: 'qat',
  host: 'localhost',
  database: 'qat',
  password: 'qat',
  port: 5432,
});

client.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.query('SELECT * from DroneType', (err, resp) => {
    console.log(err, resp.rows);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(resp.rows);
  });
});


module.exports = router;
