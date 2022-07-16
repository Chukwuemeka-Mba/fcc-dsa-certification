function fearNotLetter(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const startIndex = letters.indexOf(str[0])
    const endIndex = letters.indexOf(str[str.length - 1])
    console.log(letters[startIndex], letters[endIndex], endIndex)
    const sliced = letters.slice(startIndex, endIndex + 1)
    console.log(sliced)
    for( let i = 0; i < sliced.length; i++){
      if(!str.includes(sliced[i]))return sliced[i]
    } 
    if(str == letters) return undefined
    return str;
  }
  
  fearNotLetter("abce");