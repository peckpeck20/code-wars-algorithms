var test = [5, 3, 2, 8, 1, 4];

function sortArray(array) {
  if (array || array != undefined) {
    var constantPositions = [];
    var oddPositions = [];
    var result = [];

    array.forEach((item, index) => {
      //EVEN & 0's stored
      if (item % 2 === 0 || item === 0) {
        let target = { item: item, position: index };
        constantPositions.push(target);
      } else {
        //ODDS stored
        let target = item;
        oddPositions.push(target)
      }
    });
    //sort odds
    result = oddPositions.sort((a, b) => (a - b));
    //insert saved items;
    for (var i = 0; i < constantPositions.length; i++) {
      let correctPosition = constantPositions[i].position;
      let correctValue = constantPositions[i].item;
      result.splice(correctPosition, 0, correctValue);
    };
    return result;
  } else {
    return array;
  }
};

console.log(sortArray(test));