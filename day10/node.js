const express = require("express");
// const fs = require("fs");
const fsPromise = require("fs/promises");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // console.log(req.url);
  const time = new Date().getTime().toLocaleString();
  fsPromise.appendFile("./log.txt", req.url + "\n" + time);
  next();
});

app.get("/api/products", async (req, res) => {
  // const data = fs.readFileSync("./data.json", "utf8");
  const data = await fsPromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(data);
  res.json(arr);
});

app.post("/api/products", async (req, res) => {
  // console.log(Object.keys(req));

  const data = req.body;
  console.log(data);

  const db = await fsPromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(db);
  const len = arr.length;
  const newProduct = data;
  if (len == 0) {
    newProduct.id = 1;
  } else {
    newProduct.id = arr[len - 1].id + 1;
  }

  arr.push(newProduct);
  fsPromise.writeFile("./data.json", JSON.stringify(arr));

  res.json({
    status: "success",
    results: 1,

    data: {
      newProduct: newProduct,
    },
  });
});

app.put("/api/products/:id", async (req, res) => {
  const arr = JSON.parse(await fsPromise.readFile("./data.json", "utf8"));
  const reqId = parseInt(req.params.id);
  const data = req.body;
  data.id = req.id;

  const newArr = arr.map((elem) => {
    if (elem.id == reqId) return data;
    else return elem;
  });
  await fsPromise.writeFile("./data.json", JSON.stringify(newArr));

  res.json({
    status: "success",
    results: 1,
    data: {
      newProduct: data,
    },
  });
});

app.delete("/api/products/:id", async (req, res) => {
  const reqId = parseInt(req.params.id);
  const arr = JSON.parse(await fsPromise.readFile("./data.json", "utf8"));
  const newArr = arr.filter((elem) => {
    if (elem.id === reqId) return false;
    else return true;
  });
  await fsPromise.writeFile("./data.json", JSON.stringify(newArr));
  res.status(204);
  res.json({
    status: "Succes",
    data: {
      newProduct: null,
    },
  });
});

app.get("/api/users", async (req, res) => {
  res.status(501);
  res.json({
    status: "fail",
    message: "Route not implemented",
  });
});

app.post("/api/users", async (req, res) => {
  res.status(501);
  res.json({
    status: "fail",
    message: "Route not implemented",
  });
});

app.put("/api/users", async (req, res) => {
  res.status(501);
  res.json({
    status: "fail",
    message: "Route not implemented",
  });
});

app.delete("/api/users", async (req, res) => {
  res.status(501);
  res.json({
    status: "fail",
    message: "Route not implemented",
  });
});
app.listen(5000);
