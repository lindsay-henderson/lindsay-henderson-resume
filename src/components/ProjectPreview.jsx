import '../App.css'

<div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
				<button>
            Learn more
        </button>
    </section>
</div>



// const Projects = (props) => {
//   console.log('props here:', props)
//   return (
//     <>
//     <h1>Projects</h1>,
//     <ul className="project-list">
//     {props.allProjects.map((project) =>
//       <li key={project.id}>
//         <a href="{project.deploymentLink}"><h3>{project.title}</h3></a>
//         <p>{project.description}</p> 
//         <img src={project.image} alt="a phone and computer with app screenshots on their displays"/>
//         <a href="{project.repositoryLink}"><h4>GitHub</h4></a>
        
//         </li> 
//     )}
//     </ul>
//       </>
//   )
// }