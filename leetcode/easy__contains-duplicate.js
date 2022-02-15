/**
 * URL: https://leetcode.com/problems/contains-duplicate/
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const frequency = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true