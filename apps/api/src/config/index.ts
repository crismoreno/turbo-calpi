import { MySqlDialect } from "@sequelize/mysql";
import { Sequelize } from "@sequelize/core";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export default new Sequelize<MySqlDialect>({
  dialect: MySqlDialect,
  mysql2Module: mysql2,
  database: process.env.DBNAME,
  user: process.env.DBUSR,
  password: process.env.DBPWD,
  host: process.env.HOST,
  port: 3306,
  logging: console.log,
});
