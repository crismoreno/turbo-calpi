import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';
import Project from './projects';

dotenv.config()

const DB_CONFIG = {
	HOST: process.env.HOST || 'localhost',
  USER: process.env.DBUSR || 'root',
  PASSWORD: process.env.DBPWD,
  DB: process.env.DBNAME || 'cristinamoreno.dev',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

const sequelize = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, 'macbook2018', {
  host: DB_CONFIG.HOST,
  dialect: "mysql",

  pool: {
    max: DB_CONFIG.pool.max,
    min: DB_CONFIG.pool.min,
    acquire: DB_CONFIG.pool.acquire,
    idle: DB_CONFIG.pool.idle,
  },
});

const Projects = Project(sequelize, Sequelize);

export {
	sequelize,
	Sequelize,
	Projects
}