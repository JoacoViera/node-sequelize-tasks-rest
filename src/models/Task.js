import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
