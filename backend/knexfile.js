require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://postgres:Omen@localhost:5432/taskdb',
    migrations: {
      directory: './migrations'
    }
  }
};
