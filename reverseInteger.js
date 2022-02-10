const reverse = int => {
  let arr = Array.from(`${int}`) //int to string to array with sign
  let sign = null
  if(arr[0] === '-') sign = arr.shift() //remove sign for later

  //reverse array

  //half the length rounded down, because a middle value can stay
  for(let i = 0; i < Math.floor(arr.length / 2); i ++){
    //pointer 1, pointer 2 = pointer 2, pointer 1
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  //add back in sign
  if (sign) arr.unshift(sign)
  int = parseInt(arr.join(''))//array to string to int
  if (int <= -Math.pow(2,31) || int >= Math.pow(2,31) - 1){ //test for 32-bit signed int based on leetcode constraints
    return 0
  }
  return int
}

console.log(reverse(-123))