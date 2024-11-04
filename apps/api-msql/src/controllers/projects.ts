import projectsModel from '../models/projects';

export default {
	//GET all showable projects --> NO auth required
	getAllShowableProjects: (_, res) => {
		projectsModel.getAllShowableProjects((err, projects) =>{
			if(err){
				res.send(err)
			}else{
				res.send(projects)
			}
		})
	},
}