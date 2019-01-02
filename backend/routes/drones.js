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

console.log('drones.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('get called');

  client.query('SELECT * from Drone', (err, resp) => {
    console.log(err, resp.rows);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(resp.rows);
  });
});

router.delete('/:id', function(req, res, next) {
  client.query('delete from Drone where id = ' + req.params.id, (err, resp) => {
    console.log(err, resp.rows);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(resp);
  });
});

module.exports = router;
