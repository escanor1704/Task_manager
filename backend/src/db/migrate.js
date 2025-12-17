const env = process.env.NODE_ENV || 'development';
const knexConfig = require('../../knexfile')[env];
const knex = require('knex')(knexConfig);

async function runMigrations() {
  try {
    console.log(`Running ${env} migrations...`);
    await knex.migrate.latest();
    console.log('Migrations completed');
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

module.exports = runMigrations;
