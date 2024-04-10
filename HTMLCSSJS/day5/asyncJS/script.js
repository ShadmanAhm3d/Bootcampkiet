/* console.log(
  "GEC start"
) */

/*
function pp() {
  console.log(
    "preetystart"
  )

  let ans = 2 + 4;
  console.log(ans);
  console.log("Preetyend")

}
/*
setTimeout(pp, 10000)
console.log("GEC ENDJ") */

/*
const btn = document.getElementById('x2'); */

//type and callback
// btn.addEventListener("mouseover", pp);






/* console.log("start")
const res = fetch("https://api.github.com/users/ShadmanAhm3d");
console.log(res);
res.then(() => console.log("data fetched"));
console.log("END") */

const data = {
  firstName: `json:"title"`,
  lastName: `json:"id"`,
};

console.log("Start")
fetch('https://dummyjson.com/products/1').then(res => res.json())
  .then(json => console.log(json))
  .catch((err) => {
    console.log("Error hai bhaiya")
  })


console.log("end")


