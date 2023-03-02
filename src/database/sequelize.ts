import { Sequelize } from 'sequelize-typescript';

const dbConfig = require('../config/database')

export const sequelize = new Sequelize(dbConfig)