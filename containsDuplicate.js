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

console.log(containsDuplicate([0,4,5,0,3,6]))