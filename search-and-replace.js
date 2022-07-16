function myReplace(str, before, after) {
    const capitalRegex = /^[A-Z]/
    const smallRegex = /^[a-z]/
  
    if(before.match(capitalRegex)){
      after = after.replace([...after][0], [...after][0].toUpperCase())
      str = str.split(before).join(after)
      console.log(after)
    }else if(before.match(smallRegex)){
    after = after.replace([...after][0], [...after][0].toLowerCase())
      str = str.split(before).join(after)
    } 
    return str;
  }
  
  myReplace("I think we should look up there", "up", "Down"); 