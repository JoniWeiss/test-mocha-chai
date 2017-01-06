function movie(qty) {
  let disc;

  switch (qty) {
    case 2: disc = .05
      break;
    case 3: disc = .1
      break;
    case 4: disc = .2
      break;
    case 5: disc = .25
      break;
    case 6: disc = .3
      break;
    default: disc = 0
  }
  return Number(qty * 20 * (1 - disc))
}

function movies(arr) {
  let movieSet = {};
  
  let qty = arr.filter((x) => {
    return x !== 0
  })
  .reduce((a, b) => {
    return a + b
  }, 0)
  return movie(qty)
}
