function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
      console.log(results[i]);
    }
   
  
    return results;
    console.log(results);
  }

  largestOfFour([[1,2,3,4], [5,6,7,8]]);
   
  