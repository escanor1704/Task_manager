require('dotenv').config();
const app = require('./app');
const runMigrations = require('./db/migrate');

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await runMigrations();
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
