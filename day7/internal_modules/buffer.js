const b = new Buffer.from('ABC')

console.log(
  b.toString()
)

//will print buffer storage
b.write('other')
console.log(
  b.toString()
)
