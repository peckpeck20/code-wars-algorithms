function isValidWalk(walk) {
  const size = walk.length;
  const directionCount = { north: 0, south: 0, east: 0, west: 0 };
  walk.forEach((element, index) => {
    //console.log(element)
    switch (element) {
      case 'n':
        directionCount.north += 1;
        break;
      case 's':
        directionCount.south += 1;
        break;
      case 'e':
        directionCount.east += 1;
        break;
      case 'w':
        directionCount.west += 1;
        break;
      default:
        break;
    }
  });
  //const letters = walk.toString().replace(/,/g, "");
  let remainder = Math.round(size % 2);
  //console.log(directionCount)
  if (size < 9 || size >= 11 || remainder == 1 || directionCount.north > 5 || directionCount.south > 5 || directionCount.east > 5 || directionCount.west > 5) {
    return false;
  }
  if (size === 10 && remainder == 0) {
    return true;
  }
}

console.log(isValidWalk(['w']));