const translatePigLatin = (str) => {
    const consonantRegex = /^([b-df-hj-np-tv-z]+)(\w+)/i
    const vowelRegex = /^([aeiou])(\w+)/i

    const strArray = [...str]
    const first = strArray[0]
    if(str.match(consonantRegex)){
        console.log("true")
        strArray.shift()
        strArray.push

    }else if( str.match(vowelRegex)){
        strArray.push("way")
        strArray.join("")
        return strArray.join("")
    }

}



translatePigLatin("abeg")