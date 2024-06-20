const increasingTriplet = function (nums) {
  let smallest = Infinity; // 1
  let sSmallest = Infinity;

  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= sSmallest) {
      sSmallest = num;
    } else {
      return true;
    }
  }
  return false;
};
