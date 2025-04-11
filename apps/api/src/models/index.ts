import sequelizePool from "../config";
import Project from "./Project";

const db = {
  sequelize: sequelizePool,
  Sequelize: sequelizePool.Sequelize,
  Project,
};
export { db };
