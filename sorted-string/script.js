function longest(s1, s2) {
  //join strings 
  const input = s1+s2;
  // takes string and converts to an array
  function stringToArray(s) {
    return s.split("");
  };
  //sort() letters a-z
  //Array.from creates a new array with unique values only
  //join() converts back to string with no commas .join("");
  const sortedArray1 = Array.from(new Set(stringToArray(input).sort())).join("");  
  return sortedArray1;
}

console.log(longest("zzfgqwwezz", "yestheyarehere"))