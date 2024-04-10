console.log("heelo");




function callAPI() {

  fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=37f71a5e27a44f3c8eb083e00aac5aad")
    .then((res) => {
      res.json().then((data) => {
        renderUI(data)
      })
    })
}




function renderUI(data) {
  //got the articales from data
  const articles = data.articles;
  console.log(articles)
  const root = document.getElementById("root")
  for (let i = 0; i < articles.length; i++) {
    const ar = articles[i];
    const div = document.createElement("div")
    div.setAttribute("class", "newscard");
    const h3 = document.createElement("h3")
    h3.innerText = ar.title;
    const img = document.createElement("img");
    img.src = ar.urlToImage;
    const author = document.createElement("p")
    author.innerText = `By :  ${ar.author}`;
    const source = document.createElement("h3");

    const readmore = document.createElement("a")
    readmore.href = ar.url;
    readmore.innerText = "Read Karo bhai"


    div.appendChild(source)
    div.appendChild(author)
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(readmore)
    //appent kardo dom m
    root.appendChild(div);

  }
}


//renderUI();
callAPI()
