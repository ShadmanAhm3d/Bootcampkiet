// const figlet = require("figlet");
/* figlet("Hello", (err, data) => {
  console.log(data);
}) */

/* fetch("https://api.github.com/user/ShadmanAhm3d")
  .then((res) => {
    return res.json();
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(
      "Error occured"
    )
  });*/

//async await

async function fgetAPI() {
  const pr = await fetch("https://api.github.com/users/ShadmanAhm3d");
  const res = await pr.json();
  console.log(res);
}

fgetAPI();
