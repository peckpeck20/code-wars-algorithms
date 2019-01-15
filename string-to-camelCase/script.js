var test = "the-stealth-warrior";

function toCamelCase(str) {

  if (str != '' || string != null) {
    const firstLetter = str.slice(0, 1);
    let result = '';
    if (firstLetter === firstLetter.toUpperCase()) {
      console.log("UPPER")
    }
    if (firstLetter === firstLetter.toLowerCase()) {

      // let stringarray = str.split();
      // console.log(stringarray)
      // for(var i= 0; i<str.length; i++){
      //   //console.log(str[i])
      //   if(str[i] === '-' || str[i] === '_'){
      //     //let toReplace = str[i];
      //     console.log("found: " + str[i]  )
      //   }else {
      //     result += str[i];
      //   }
      // }

      var patt1 = /is(?= all)/;
      var result = str.match(patt1);


      console.log(result)
    }

  }
  //return firstLetter;
}

console.log(toCamelCase(test))