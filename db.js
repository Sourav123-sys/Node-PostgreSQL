import { Pool } from 'pg'
 
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port:5432,
  database:"bookdb"
})
module.exports = pool