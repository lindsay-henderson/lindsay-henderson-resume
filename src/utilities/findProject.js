let allProjects = 
[
  {
    title: '5k Fox',
    description: 'A digital pet. User helps a fox train for a 5k by giving them naps, cookies, and regular runs',
    image: 'https://live.staticflickr.com/65535/52493360709_7c478c33f1_k.jpg',
    repositoryLink: 'https://github.com/lindsay-henderson/5k-Fox.git',
    deploymentLink: 'https://5k-fox.netlify.app/'
  },

  {
    title: 'Roller Skate Trick Library',
    description: 'A community-driven app that allows users to contribute to a library of tricks a person can do on roller skates',
    image: 'https://live.staticflickr.com/65535/52493544670_31aa0bebc6_k.jpg',
    repositoryLink: 'https://github.com/lindsay-henderson/roller-skate-trick-library.git',
    deploymentLink: 'https://roller-skate-library.fly.dev/'
  }
]

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