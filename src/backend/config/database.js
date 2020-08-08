const pg = require('pg');
const { resolve } = require('path');

if (!process.env.VUE_APP_DB_DATABASE) {
  const envPath = resolve(__dirname, '..', '..', '..', '.env.development');

  require('dotenv').config({ path: envPath });
}

const database = process.env.VUE_APP_DB_DATABASE;
const dialect = process.env.VUE_APP_DB_DIALECT;
const host = process.env.VUE_APP_DB_HOST;
const port = process.env.VUE_APP_DB_PORT;
const username = process.env.VUE_APP_DB_USER;
const password = process.env.VUE_APP_DB_PASS;

module.exports = {
  dialect,
  dialectModule: pg,
  username,
  password,
  database,
  host,
  port,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
