import { getBooleanFromString, buildQueryParams } from "../helpers/index";
import client from "../config/config";

export default {
  list: async (req, res) => {
    const featured = getBooleanFromString(req.query.featured);
    const visible = getBooleanFromString(req.query.visible);

    const projects = await client
      ?.db("Portfolio")
      .collection("projects")
      .find(buildQueryParams({ featured, visible }))
      .toArray();
    console.log(projects?.length);
    res(projects);
  },
};
