const kidsWithCandies = function (candies, extraCandies) {
  const maxCadies = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxCadies);
};
