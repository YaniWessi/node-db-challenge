const knex = require("knex");

const db = require("../knexfile");

module.exports = knex(db.development);
