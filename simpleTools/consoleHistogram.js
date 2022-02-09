const consoleHistogram = (
  data, 
  scaleFunction = (input) => input, 
  bins = Math.ceil(Math.sqrt(data.length)), 
  icon = '#'
  ) => {

  const min = Math.min(...data)
  const max = Math.max(...data)
  const binWidth = Math.ceil((max - min + 1) / bins)

  const histogram = new Array(bins).fill(0)

  for (const item of data) {
      histogram[Math.floor((item - min) / binWidth)]++
  }

  console.log(histogram)
  histogram.forEach(bin => {
    let binBar = ''
    for (let i = 0; i < scaleFunction(bin); i ++){
      binBar += icon
    }
    console.log(binBar)
  })
}