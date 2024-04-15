// const fs = require('fs')

/* const data = fs.readFileSync('./myReadme.txt', { encoding: 'utf8' })
//reads the content of file
console.log(data) */

// fs.writeFileSync('./log.txt', "Today is a good day")

/* const data = fs.readFileSync('./myReadme.txt', { encoding: 'utf8' })
console.log("Start")
//reads the content of file
console.log(data)
console.log("End") */

//kuch bhi sakte ho fs me
/* const fspromise = require('fs/promises')



const pr = fspromise.readFile('./myReadme.txt', { encoding: 'utf8' })
pr.then((res) => {
  console.log(
    res
  )
}) */

//callback api in filesystem

/* const fs = require('fs')
fs.readFile('./myReadme.txt',
  { encoding: 'utf8' },
  (err, data) => {
    console.log(
      data
    )
  })
*/

// htpp mdoule

/* const http = require('http');

const fs = require('fs');

const data = fs.readFileSync('./data.json', 'utf8');

const dataobject = JSON.parse(data).products;

const products = dataobject.products;
const cardTemplate = fs.readFileSync('./templates/cardtemp.html', { encoding: 'utf8' })
const htmlTemplate = fs.readFileSync('./templates/page.html', { encoding: 'utf8' }) */

/* const card1 = cardTemplate.replace('Titile', products[0].title)
  .replace('Ifo', products[0].description)

const card2 = cardTemplate.replace('Titile', products[1].title)
  .replace('Ifo', products[1].description)

const card3 = cardTemplate.replace('Titile', products[1].title)
  .replace('Ifo', products[1].description)
*/
//const allCards = card1 + card2 + card3;

/* const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace('Titile', elem.title)
  newCard = newCard.replace('Ifo', elem.description)
  return newCard;
})


const allCardString = allCards.join(' ');


const page = htmlTemplate.replace('__PRODUCTS CARDS', allCardString);


const app = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'content-type': 'text/html', })
  res.end(page);
});
*/

/* app.listen(3000, () => {
  console.log('******Server Started******')
});
*/
//http://localhost:1200

const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

const data = fs.readFileSync("./data.json", "utf8");
const ParsedProducts = JSON.parse(data).products;
const cardTemplate = fs.readFileSync("./templates/cardtemp.html", {
  encoding: "utf8",
});
const htmlTemplate = fs.readFileSync("./templates/page.html", {
  encoding: "utf8",
});

const allCards = ParsedProducts.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("Titile", elem.title);
  newCard = newCard.replace("__THUMBNAIL", elem.thumbnail);
  newCard = newCard.replace("Ifo", elem.description);
  let id = elem.id;
  newCard = newCard.replace("__LINK", `http://localhost:3000/products/${id}`);
  return newCard;
});

const allCardString = allCards.join(" ");

const page = htmlTemplate.replace("__PRODUCTS CARDS", allCardString);

/* const app = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(page);
}); */

app.get("/", (req, res) => {
  res.send(page);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = ParsedProducts.find((elem) => elem.id === id);
  if (product) {
    let productDetails = `
      <h1>${product.title}</h1>
      <img src="${product.thumbnail}" alt="${product.title}">
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>Stock: ${product.stock}</p>
      <a href="/">Back to Home</a>
    `;
    res.send(productDetails);
  } else {
    res.status(404).send("Product not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});
