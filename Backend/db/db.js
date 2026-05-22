const mysql = require("mysql2/promise");
const path = require("path");

// Load Backend/.env explicitly so the DB config is available
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// NOTE: do not attempt a test connection here to avoid startup failures
// when DB credentials are missing or when running the frontend-only flow.

module.exports = pool;
