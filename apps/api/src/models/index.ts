import sequelizePool from "../config";
import Project from "./Project";
import Client from "./Client";
import Origin from "./Origin";
import Tag from "./Tag";
import ProjectTag from "./ProjectTag";

const db = {
  sequelize: sequelizePool,
  Sequelize: sequelizePool.Sequelize,
  Project,
  Client,
  Origin,
  Tag,
  ProjectTag,
};

db.Project.belongsTo(db.Client, { foreignKey: "clientId", as: "client" });
db.Client.hasMany(db.Project, {
  foreignKey: "clientId",
  as: "projects-clients",
});

db.Project.belongsTo(db.Origin, { foreignKey: "originId", as: "origin" });
db.Origin.hasMany(db.Project, {
  foreignKey: "originId",
  as: "projects-origins",
});

db.Project.belongsToMany(db.Tag, {
  through: db.ProjectTag,
  foreignKey: "projectId",
  otherKey: "tagId",
  as: "tags-projects",
});

db.Tag.belongsToMany(db.Project, {
  through: db.ProjectTag,
  foreignKey: "tagId",
  otherKey: "projectId",
  as: "projects-tags",
});

export { db };
