import { buildQueryParams } from "../helpers/index";
import { db } from "../models";

const { Project } = db;

export default {
  list: async ({ featured, visible }, res) => {
    const projects = await Project.findAll({
      where: { show: visible || undefined },
      order: [["orderby", "ASC"]],
      attributes: ["id", "customer", "title"],
    });
    res(projects);
  },
};
