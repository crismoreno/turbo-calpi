import {Projects} from '../dto'

export default {
		//GET all showable projects --> NO auth required
		getAllShowableProjects: async (response) =>{
			try{
				const projects = await Projects.findAll({
					where: { show: true },
					order: [['orderby', 'ASC']],
					attributes: ['id', 'customer', 'title']
				})
				response(null, projects)
			}catch(err){
				response(err, null)
			}
		},
}