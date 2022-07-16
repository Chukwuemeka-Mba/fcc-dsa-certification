function pairElement(str) {
    let strArray = str.split('')
    let resultArr = []
    for(let i = 0; i < strArray.length; i++){
      if(strArray[i] == "A"){
        resultArr.push(["A", "T"])
      }
      else if(strArray[i] == "T"){
        resultArr.push(["T", "A"])
      }
      if(strArray[i] == "G"){
        resultArr.push(["G", "C"])
      }
      if(strArray[i] == "C"){
        resultArr.push(["C", "G"])
      }
    }
  console.log(strArray, resultArr)
    return resultArr;
  } 
  pairElement("GCG");