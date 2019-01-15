var names = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}];


function list(names) {
  var length = names.length;
  var finalList = '';

  function handleTwo(item) {
    finalList = `${item[0].name} & ${item[1].name}`
  }
  
  function handleMultiple(item) {
    //1st value of the list
    finalList = `${item[0].name}, `
    //add commas to all values in list expect last 2
    for(var i = 1; i < length -2; i++){
      finalList += `${item[i].name}, ` 
    }
    //set semi last entry with no comma
     finalList += `${item[length-2].name}`
     //set last entry
     finalList += ` & ${item[length-1].name}`
  }

  if (length <= 0) {
    return finalList = ''
  } if (length <= 1) {
    finalList = names[0].name;
    return finalList;
  } if (length === 2) {
    handleTwo(names);
    return finalList;
  } if (length >= 3) {
    handleMultiple(names);
    return finalList;
  }
};




console.log(list(names));




