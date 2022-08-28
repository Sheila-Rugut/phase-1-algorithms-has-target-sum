function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const complement = target - array[i];
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create a for loop to look through all the elements of the array
      the first for loop iterates through the array to find the first value
        the second loop finds the complement of the first value which when added together
        gives the target value
          if statement checks whether the vaalue complements the pair and returns true
  outside the for loop it returns false
*/

/*
  Add written explanation of your solution here
  I start by creating two loops, allowing me to iterate through every 
  combination of numbers in the array. 
  Now I can test the combos to see if any of them add up to target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
