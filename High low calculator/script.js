var test = "1 9 3 4 -5";
function highAndLow(numbers) {
  //takes string and puts each entry into an array then sort
  const numArray = numbers.split(" ").sort((a, b) => (a - b));
  const high = numArray[numArray.length - 1];
  const low = numArray[0];
  return `${high} ${low}`;
}
;

console.log(highAndLow(test))
