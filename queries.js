const Pool = require('pg').Pool
const pool = new Pool({
  user: 'oliver',
  host: 'localhost',
  database: 'tiistaikartat',
  password: 'admin',
  port: 5432,
})

const haePaikat = (reques, response) => {
  pool.query('SELECT * FROM paikat ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

module.exports = {
  haePaikat
}
