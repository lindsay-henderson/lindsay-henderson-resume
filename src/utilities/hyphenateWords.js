function hyphenateWords(string) {

  const str = string.toLowerCase()
  console.log(str)
  let arr = str.replace(/\s/g, "-").toLowerCase()
  console.log(arr)

  return arr
}


export default hyphenateWords