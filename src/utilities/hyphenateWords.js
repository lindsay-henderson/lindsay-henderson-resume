function hyphenateWords(string) {

  str = string.toLowerCase()
  console.log(str)
  let arr = str.replace(/\s/g, "-").toLowerCase()
  console.log(arr)



  return arr
}


hyphenateWords('bAnAnA NOOise')