
const ShowTechs = (props) => {
  
  return (
  <p className="tech tools">
    Technologoies Used:
    {props.techs.map(prop => {
      return (
        <img src={prop} alt= 'logo for tech' key={prop.id}/> 
  )
  })}
</p>
  )
}


export default ShowTechs