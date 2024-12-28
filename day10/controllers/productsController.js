const fsPromise = require("fs/promises");

const getAllProducts = async (req, res) => {
  // const data = fs.readFileSync("./data.json", "utf8");
  const data = await fsPromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(data);
  res.status(200);
  res.json(arr);
};

const addProducts = async (req, res) => {
  // console.log(Object.keys(req));

  const data = req.body;
  console.log("Received data:", data);

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
};

const replaceProduct = async (req, res) => {
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
};

const deleteProducts = async (req, res) => {
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
};

module.exports = {
  getAllProducts,
  addProducts,
  replaceProduct,
  deleteProducts,
};
