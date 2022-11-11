import allProjects from "../data/projects"

function Projects(props) {
  return (
    <h1>Projects</h1>,
    allProjects.forEach(project => {
        <ul>
        <li>project.title</li>
      </ul>
      })
  )
}

export default Projects