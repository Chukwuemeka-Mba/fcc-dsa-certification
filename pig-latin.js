const translatePigLatin = (str) => {
    const consonantRegex = /^([b-df-hj-np-tv-z]+)(\w*)/i
    const vowelRegex = /^([aeiou])(\w+)/i
    const strArray = [...str]
    const first = strArray[0]
    if(str.match(consonantRegex)){
        const result = str.match(consonantRegex)[1]
        strArray.splice(0, result.length)
        strArray.push(result + "ay")
        console.log("result =>", result, strArray.join(""))
        return strArray.join("")

    }else if( str.match(vowelRegex)){
        strArray.push("way")
        strArray.join("")
        return strArray.join("")
    }
}
translatePigLatin("rhythm")