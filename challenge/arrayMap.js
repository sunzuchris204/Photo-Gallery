
function findSubarraySum(arr, target) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  let foundSubarray = false;

  while (right < arr.length) {
    // Add the right or current element to the current sum
    currentSum += arr[right];
    console.log("Current sum after adding element:", currentSum);

    // If the current sum is greater than the target, move the left pointer and subtract the corresponding element
    while (currentSum > target) {
      currentSum -= arr[left];
      console.log("Subtracting element from left:", currentSum);
      left++;
    }

    // If the current sum is equal to the target, change foundSubarray to true
    if (currentSum === target) {
      foundSubarray = true;
      return "Found a subarray at current sum:" + currentSum;
    }

    right++;
  }

  return foundSubarray;
}
console.log(findSubarraySum([4, 2, 7, 1, 9, 5], 17));