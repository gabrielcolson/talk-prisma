const environment = process.env.ENVIRONMENT || 'development';
const config = require('../../knex/knexfile')[environment];
module.exports = require('knex')(config);
