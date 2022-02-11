const removeDuplicates = (nums) => {
  nums.forEach((num, i) => {
    let j = i + 1
    while (num === nums[j]){
      j++
    }
    nums.splice(i, j - i)
    j = i
  })
  return nums
}

console.log(removeDuplicates([0,0,1,1,1,2,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))