function spinalCase(str) {
    const spaceRegex = /\s+|_+/g
    const camelRegex = /([a-z])([A-Z])/g
    // replace lowercase followed by uppercase with lowercase-space-uppercase
    str = str.replace(camelRegex, "$1 $2")
    let spinalStr = str.replace(spaceRegex, "-");
    console.log(spinalStr.toLowerCase())
    return str;
  }
  
  spinalCase('thisIsSpinalTap');