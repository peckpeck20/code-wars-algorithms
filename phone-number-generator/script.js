function createPhoneNumber(numbers) {
  var area, first, second, numberString;
  //convert array => string and remove spaces
  numberString = numbers.toString().replace(/,/g, "");
  area = numberString.substr(0, 3);
  first = numberString.substr(3, 3);
  second = numberString.substr(6, 4);
  var formatted = `(${area}) ${first}-${second}`;
  return formatted;
}
// alternate approach
// var format = "(xxx) xxx-xxxx";

// for (var i = 0; i < numbers.length; i++) {
//   format = format.replace('x', numbers[i]);
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));