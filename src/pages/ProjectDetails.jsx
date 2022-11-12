import { allProjects } from "../data/allProjects";

const ProjectDetails = () =>{
  
  return(
    <section>
      <img src={allProjects[0].image} alt="" />
      <h1>{allProjects[0].title}</h1>
      <p>{allProjects[0].description}</p>

    </section>

  )
}


export default ProjectDetails