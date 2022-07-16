function uniteUnique(arr) {
    const args = [...arguments]
    let resultArr = args[0]
  
    // first make the result array contain only unique values
    let uniqueChars = [...new Set(resultArr)];
    resultArr = uniqueChars
    
    // push only unique values into the result array in order without sorting
    for(let i = 0; i < args.length; i ++){
        for(let j = 0; j < args[i].length; j ++){
          if(resultArr.indexOf(args[i][j]) == -1){
            resultArr.push(args[i][j])
            console.log(resultArr)
          }
          
      }
    }
    return resultArr;
  }
  
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);