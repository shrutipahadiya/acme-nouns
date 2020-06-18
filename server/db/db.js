const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:tiger123@localhost:2052/acme_nouns';

const db = new Sequelize(DATABASE_URL);

module.exports = { db };