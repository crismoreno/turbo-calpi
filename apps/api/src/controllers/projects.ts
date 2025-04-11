import projects from "../repository/projects";
import { parseStringToBoolean } from "../helpers/index";

export default {
  list: (req, res) => {
    const featured = parseStringToBoolean(req.query.featured);
    const visible = parseStringToBoolean(req.query.visible);

    projects.list({ featured, visible }, (projects) => {
      res.send(projects);
    });
  },
};
