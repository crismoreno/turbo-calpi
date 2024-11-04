import { Projects } from "../dto";

export default {
  //GET all showable projects --> NO auth required
  getAllShowableProjects: async (response) => {
    try {
      // TODO:Query projects
      // db.getCollection("Projects")
      //   .find(
      //     {
      //       where: { show: true },
      //     },
      //     {
      //       include: ["id", "customer", "title"],
      //     },
      //   )
      //   .sort({
      //     order: [["orderby", "ASC"]],
      //   });
      response(null, projects);
    } catch (err) {
      response(err, null);
    }
  },
};
