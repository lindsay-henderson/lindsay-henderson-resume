function hyphenateWords(string) {

  const str = string.toLowerCase()
  let arr = str.replace(/\s/g, "-").toLowerCase()

  return arr
}


export default hyphenateWords