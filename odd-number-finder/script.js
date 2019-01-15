var testData = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function findOdd(a) {
  const length = a.length;
  var repeatedNumbers = [];
  var result = [];

  for (var i = 0; i < length; i++) {
    var firstNumberCompared = a[i];
    var found = [];
    //takes 1st loop value in current position
    //compares with all values in input array
    //saves found numbers to found
    for (var y = 0; y < length; y++) {
      if (firstNumberCompared === a[y]) {
        found.push(a[y]);
      };
    };
    //saves repeated numbers
    repeatedNumbers.push({ number: found[0], repeats: found.length });
  }
  //remove duplicate entries
  const final = Array.from(new Set(repeatedNumbers.map(item => item.number)))
    .map(number => {
      return {
        number: number,
        repeats: repeatedNumbers.find(item => item.number === number).repeats
      };
    });
  //checks if the number of repeats is ODD - if true,saves entry to result
  for (var j = 0; j < final.length; j++) {
    if (final[j].repeats % 2) {
     // console.log(final[j]);
      result.push(final[j]);
    }
  };
  return result[0].number;
};

console.log(findOdd(testData))