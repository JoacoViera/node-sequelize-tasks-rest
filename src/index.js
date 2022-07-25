import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
  const port = 8000;

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port);
    console.log('Server listening on port', port);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
