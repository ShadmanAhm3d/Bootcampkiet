// const arr = [10, 22, 32]
/* const ans = arr.map((a) => {
  console.log(a)
  return a * 2;
})

const ans2 = arr.map(a => a * 2)
console.log(
  ans, ans2
) */



//filter


//

/* const arr3 = [
  'Delhi,IndIa', 'CHennai,India',
  'Shangai,China',
  'Beijing,China',
  'Washington,USA',
  'Dallas,USA',
  'Texas,USA',
] */

/* const ar = arr2.filter((a) => {
  //or you can use .include fucntionality
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 'i' || a[i] == 'I') {
      return a[i];
    }
  }
})
console.log(ar) */



/* const ans = arr3.filter((elem) => {
  elem = elem.toLowerCase()
  if (elem.includes('india')) return true;
  else return false;
})

const ans2 = arr3.filter((elem) => elem.toLowerCase().includes('india'))

console.log(
  ans
)
console.log(
  ans2
) */



//reduce

const arr = [2, 3, 4, 5, 6, 7, 6];

let total = 0;
const ans = arr.map((a) => {
  total = total + a;
  return total;
})


console.log(total)
console.log(ans)

