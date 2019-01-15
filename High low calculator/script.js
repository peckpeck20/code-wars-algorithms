var test = "1 9 3 4 -5";
function highAndLow(numbers){
  //takes string and puts each entry into an array then sort
  const numArray = numbers.split(" ").sort((a,b) => (a-b));
   const high = numArray[numArray.length -1];
   const low = numArray[0];
  return `${high} ${low}`;
}
;

console.log(highAndLow(test))



// function zero() { return 0 }
// function one() { return 1 }
// function two() { return 2 }
// function three() { return 3 }
// function four() { return 4 }
// function five() { return 5 }
// function six() { return 6 }
// function seven(operator) {
//   if (!operator) { return 7 } else {
//     switch(operator) {
//       case plus:
//           return plus();
//           break;
//       case minus:
//           return minus(7,);
//           break;
//       default:
//           break;
//   }
//   }
// }
// function eight() { return 8 }
// function nine() { return 9 }

// function plus(a) { return + a }
// function minus(a) { return - a }
// function times(a) {return * a  }
// function dividedBy(a) {return  / a }
