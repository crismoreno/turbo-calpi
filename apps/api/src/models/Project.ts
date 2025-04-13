import { DataTypes } from "@sequelize/core";
import sequelizePool from "../config";

export default sequelizePool.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originId: {
    type: DataTypes.INTEGER,
  },
  clientId: {
    type: DataTypes.INTEGER,
  },
  completionDate: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prodUrl: {
    type: DataTypes.STRING,
  },
  repoUrl: {
    type: DataTypes.STRING,
  },
  blogUrl: {
    type: DataTypes.STRING,
  },
  downloadUrl: {
    type: DataTypes.STRING,
  },
  videoUrl: {
    type: DataTypes.STRING,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  relatedBy: {
    type: DataTypes.STRING,
  },
  relatedById: {
    type: DataTypes.INTEGER,
  },
  visible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});
