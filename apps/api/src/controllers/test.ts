import projectsModel from "../repository/projects";

export default {
  helloWorld: (_, res) => {
    res.send("Hello World");
  },
};
