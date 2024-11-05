import projects from "../repository/projects";

export default {
  list: (req, res) => {
    projects.list(req, (err, projects) => {
      if (err) {
        res.send(err);
      } else {
        res.send(projects);
      }
    });
  },
};
