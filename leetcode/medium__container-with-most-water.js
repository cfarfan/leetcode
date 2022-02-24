/**
 * URL: https://leetcode.com/problems/container-with-most-water/
 *
 * Container With Most Water
 *
 * You are given an integer array height of length n. There are n vertical lines
 * drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * Constraints:
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let max = -Infinity;
  while (leftIndex < rightIndex) {
    const large = rightIndex - leftIndex;
    const area = large * Math.min(height[rightIndex], height[leftIndex]);
    max = Math.max(max, area);
    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1
