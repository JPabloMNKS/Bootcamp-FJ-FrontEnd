// test class
console.log(
    [1,2,3,4].map((number,index) =>{
        return {
            [index]: number
        }
    }));
    
    console.log(
    [1,2,3,4].map((number,index) =>
        ({
            [index]: number
        })
    ));
    
    // CHALLENGE
    // I have an array that always has 2 repeated elements except for one
    // for example [1,2,4,7,4,2,1]
    // I want to find the element that is not repeated in this example
    // result 7
 
    const noFrequentItem = (arr) => 
        arr.filter((item,index) => {
          arr.splice(index,1)
          const result = !arr.includes(item)
          arr.splice(index,0,item)
          return result
      })
   
      console.log(`Non duplicated values: ${noFrequentItem([1,2,4,7,4,2,1])}`);



