/* const p = document.querySelector('div')

// div[0].innerHTML = "<p>Heelo</p>"
//res.remove()

const c = document.querySelector('p:nth-child(2)')
console.log(c)
// const d = document.querySelectorAll('p')

p.removeChild(c) */
// p[1].remove(d)

function getInfo(e) {
  /* const c = document.querySelector('div')
  const elem = document.createElement('p')
  elem.innerText = "SHADMAN"
  // c.prepend("MynameisShadman")
  c.prepend(elem) */
  console.log(e)
  e.target.class = 'abc'
  // e.target.style.backgroundColor
  // e.target.setAttribute('class', 'abc')
  e.target.style.backgroundColor = 'purple'

}
