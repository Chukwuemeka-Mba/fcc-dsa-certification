function spinalCase(str) {
    const spaceRegex = /\s+|_+/g
    const camelRegex = /([a-z])([A-Z])/g
    str = str.replace(camelRegex, "$1 $2")
    let spinalStr = str.replace(spaceRegex, "-");
    console.log(spinalStr.toLowerCase())
    return str;
  }
  
  spinalCase('thisIsSpinalTap');