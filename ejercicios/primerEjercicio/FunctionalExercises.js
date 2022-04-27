// first Exercise
var times;
function frequentItem(exercise) {
    const commonItem = exercise.reduce( (previousValue, currentValue) => {
        previousValue[currentValue] = (previousValue[currentValue] || 0 ) + 1
     return previousValue
  },{})

  times = commonItem.a;
  return Object.keys(commonItem).reduce((a, b) => commonItem[a] > commonItem[b] ? a : b)
}

var result = frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(`${result} ( ${times} times )`);

// Second Exercise

const array = [0, 1, 2, 3, 4];
const initialValue = 0;
const sumSquare = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue ** 2,
  initialValue
);

console.log(sumSquare);

// Third Exercise

const arrayToClean = [NaN, 0, 15, false, -22, '',  null, undefined, 47];
const clean = arrayToClean.filter(Number);
console.log(clean);
