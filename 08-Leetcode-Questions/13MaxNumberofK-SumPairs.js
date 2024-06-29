const maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let opprations = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      opprations++;
      left++;
      right++;
    } else if (sum < k) {
      left++;
    } else {
      right++;
    }
  }
  return opprations;
};

const maxOperations2 = function (nums, k) {
  //   k = 10;
  //   num = 2;
  //   complement = 8(k - num);

  let map = new Map();
  let opprations = 0;

  for (const num of nums) {
    let complement = k - num;

    if (map.get(complement) > 0) {
      opprations++;
      map.set(complement, map.get(complement) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return opprations;
};
