const containsDuplicate = nums => {
  const map = {}
  return nums.find(num => {
    if(map[num] !== undefined){
      return true
    } else {
      map[num] = num
    }
  }) !== undefined
}

//optimal runtime solution from leetcode
// var containsDuplicate = function(nums) {
//   let hm=new Map();
//   for(let num of nums){
//       if(hm.has(num)) return true;
//       hm.set(num,1);
//   }
//   return false;
// };

console.log(containsDuplicate([0,4,5,0,3,6]))