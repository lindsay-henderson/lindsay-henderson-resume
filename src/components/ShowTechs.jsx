
const ShowTechs = (props) => {
  
  return (
    <div className="tech-tools">
    <h4>Technologies Used:</h4>
    <div className="tech-icons">
    {props.techs.map(prop => {
      return (
        <img src={prop} alt= 'logo for tech' key={prop.id}/> 
        )
      })}
      </div>
    </div>
  )
}


export default ShowTechs