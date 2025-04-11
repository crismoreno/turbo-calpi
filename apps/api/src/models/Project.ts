import { DataTypes } from "@sequelize/core";
import sequelizePool from "../config";

export default sequelizePool.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderby: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // developed_at: {
  //   type: DataTypes.STRING,
  // },
  customer: {
    type: DataTypes.STRING,
  },
  collaborators: {
    type: DataTypes.STRING,
  },
  completion_date: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  link_to_prod: {
    type: DataTypes.STRING,
  },
  link_to_repo: {
    type: DataTypes.STRING,
  },
  link_to_post: {
    type: DataTypes.STRING,
  },
  link_to_download: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  // tags: {
  //   type: DataTypes.STRING,
  // },
  // coding_lang: {
  //   type: DataTypes.STRING,
  // },
  is_featured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  related_by: {
    type: DataTypes.STRING,
  },
  related_by_id: {
    type: DataTypes.INTEGER,
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // imgs: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
});
