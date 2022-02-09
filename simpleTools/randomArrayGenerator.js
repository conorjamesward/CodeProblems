const uniformRandomArrayGenerator = (length) => {
  let i = 0
  let arrReturn = []
  while (i < length) {
    i++
    arrReturn.push(Math.floor(Math.random() * length))
  }
  return arrReturn
}