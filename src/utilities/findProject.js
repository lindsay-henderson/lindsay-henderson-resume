import {allProjects} from '../data/allProjects'

export function findProject(string) {
  
  let newArr = allProjects
  let arr = string.replace(/-/g, ' ')
  let result = newArr.filter(project => {
    return project.title.toLowerCase() === arr
  })
  let found = result[0]
  return found 
}


export default findProject