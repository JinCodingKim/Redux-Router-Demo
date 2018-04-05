const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const app = express();
const productCtrl = require("./controllers/products_controller");

app.use(cors());
app.use(json());

app.get("/api/products", productCtrl.getProductsSorted);
app.get("/api/product/:id", productCtrl.getProductById);

app.listen(PORT || 3001, () => {
  console.log(`Hello Its me: ${PORT || 3001}`);
});
