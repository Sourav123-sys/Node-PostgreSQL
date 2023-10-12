const { Pool } = require("pg");
require('dotenv').config(); // Load environment variables from .env file

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

module.exports = pool;
