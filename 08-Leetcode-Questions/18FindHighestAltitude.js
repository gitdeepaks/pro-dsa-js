const largestAltitude = function (gain) {
  let currentAltitude = 0;
  let maxAltutude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    maxAltutude = Math.max(maxAltutude, currentAltitude);
  }
  return maxAltutude;
};
