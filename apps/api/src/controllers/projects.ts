import projects from "../repository/projects";
import { parseStringToBoolean, parseStringToNumber } from "../helpers/index";

export default {
  list: (req, res) => {
    const featured = parseStringToBoolean(req.query.featured);
    const visible = parseStringToBoolean(req.query.visible);

    projects.list({ featured, visible }, (projects) => {
      res.send(projects);
    });
  },
  get: (req, res) => {
    const id = parseStringToNumber(req.params.id);

    projects.get({ id }, (project) => {
      res.send(project);
    });
  },
};
