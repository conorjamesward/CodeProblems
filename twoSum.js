// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// const twoSum = (nums, target) => {
//   const hashTable = {}

//   const buildHash = () => {
//     nums.forEach((num, i) => {
//       if (hashTable[num]) {
//         hashTable[num].push(i)
//       } else {
//         hashTable[num] = [i]
//       }
//     })
//   }
//   buildHash()

//   const findSum = () => {
//     let sum = null
//     nums.forEach(num => {
//       if (sum) { //found sum
//         return
//       } else if(num === target / 2){ //duplicate number case
//         if (hashTable[num].length === 2){ //duplicate number special case
//           sum = hashTable[num]
//         }
//       } else { //different numbers case
//         const find = hashTable[num]
//         if (find && hashTable[target - num]){
//           sum = [...hashTable[target - num], ...find]
//         }
//       }
//     })
//     return sum
//   }

//   return findSum()
// }


//hashmap was fun to try, but not ultimately the best answer. The hints were misleading to me. The implementations of hasmap I found as examples were much larger then the below optimum solution

const twoSum = (nums, target) => {
  let map = {}; //hash
  for(let x = 0; x < nums.length; x++){ //iterate
      let sum = target - nums[x]; // product
      //map of product !== undefiend && map of product does not = x
      //return map of [product and x]
      if(map[sum] !== undefined && map[sum] !== x){
          return [map[sum], x];
      }
      map[nums[x]] = x; //add to map
  }
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([-1,-2,-3,-4,-5], -8))