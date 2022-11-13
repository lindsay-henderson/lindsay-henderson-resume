import {allProjects} from '../data/allProjects'

export function findProject(string) {
  
  let newArr = allProjects
  let arr = string.replace(/-/g, ' ')
  console.log(arr)
  let result = newArr.filter(project => {
    return project.title.toLowerCase() === arr
  })
  console.log('title found', result)
  let found = result[0]
  return found 
}


export default findProject