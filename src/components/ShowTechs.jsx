
const ShowTechs = (props) => {
  
  return (
  <div className="tech tools">
    <h4>Technologies Used:</h4>
    {props.techs.map(prop => {
      return (
        <img src={prop} alt= 'logo for tech' key={prop.id}/> 
  )
  })}
</div>
  )
}


export default ShowTechs