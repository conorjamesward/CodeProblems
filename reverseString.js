const reverseString = s => {
  //half the length rounded down, because a middle value can stay
  for(let i = 0; i < Math.floor(s.length / 2); i ++){
    //pointer 1, pointer 2 = pointer 2, pointer 1
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
  return s
}

console.log(reverseString(['c', 'o', 'n', 'o', 'r']))