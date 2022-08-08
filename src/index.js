/* eslint-disable no-console */
import app from './server.js';
import { sequelize } from './database/database.js';

import './models/Project.js';
import './models/Task.js';

async function main() {
  const port = 8000;

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: false });
    app.listen(port);
    console.log('Server listening on port', port);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
