import { FindOptions } from "@sequelize/core";
import { db } from "../models";
import { parseBooleanQuery } from "../helpers";

const { Project } = db;

export default {
  list: async ({ featured, visible }, res) => {
    const baseFindObject: FindOptions = {
      where: {},
      order: [["priority", "ASC"]],
      attributes: [
        "id",
        "title",
        "priority",
        "prodUrl",
        "featured",
        "visible",
        "completionDate",
        "description",
        "repoUrl",
        "blogUrl",
        "downloadUrl",
        "videoUrl",
        "featured",
        "relatedBy",
        "relatedById",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: db.Client,
          as: "client",
          attributes: ["name", "fullName"],
        },
        {
          model: db.Origin,
          as: "origin",
          attributes: ["name", "fullName"],
        },
        //! TODO: Does not work yet
        // {
        //   model: db.Tag,
        //   as: "tags-projects",
        //   attributes: ["id", "name"],
        //   through: { attributes: [] },
        // },
      ],
    };

    const projects = await Project.findAll(
      parseBooleanQuery(baseFindObject, { featured, visible }),
    );
    res(projects);
  },

  get: async ({ id }, res) => {
    console.log(id);
    const project = await Project.findOne({
      where: { id },
      attributes: [
        "id",
        "title",
        "priority",
        "prodUrl",
        "featured",
        "visible",
        "completionDate",
        "description",
        "repoUrl",
        "blogUrl",
        "downloadUrl",
        "videoUrl",
        "featured",
        "relatedBy",
        "relatedById",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: db.Client,
          as: "client",
          attributes: ["id", "name", "fullName"],
        },
        {
          model: db.Origin,
          as: "origin",
          attributes: ["name", "fullName"],
        },
      ],
    });

    res(project);
  },
};
