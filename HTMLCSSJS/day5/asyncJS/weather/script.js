console.log("Attached")


function fetchAPI() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?&key=ZJMHXYZAP4RBXFTK5784Q34GX"
  fetch(url)
    .then((res) => res.json())
    .then(renderUI)
}

//fetchAPI();
const root = document.getElementById("root");



function renderUI(data) {
  const days = data.days;
  console.log(
    days
  )

  const row = document.createElement("tr")



  let cell1 = document.createElement("th")
  cell1.innerText = 'DATE';
  row.appendChild(cell1)

  let cell2 = document.createElement("th")
  cell2.innerText = 'MAXIMUM'
  row.appendChild(cell2)




  root.append(row);


  const childRow = document.createElement("row")
  let c1 = document.createElement("th")
  c1.innerText = 'DATE'
  childRow.appendChild(c1)

  let c2 = document.createElement("th")
  c2.innerText = 'MAXIMUM'
  childRow.appendChild(c2)
  root.appendChild(childRow)

}


