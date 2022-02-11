const merge = (nums1, m, nums2, n) => {
  //find locations in nums1 that are>=nums2[j]
  //remove zero from end and insert there
  let i = n
  while(i < n + m){
    nums1.pop()
    i++
  }
  i = 0
  while(i < m + n){
    if(nums2[0] <= nums1[i] || i > nums1.length - 1 && nums2[0] !== undefined){
      nums1.splice(i, 0, nums2.shift())
    }
    i++
  }
}

let num1 = [1,2,3,0,0,0]
let num2 = [2,5,6]

merge(num1, num1.length - num2.length, num2, num2.length)

console.log(num1)
console.log(num2)