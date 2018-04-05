const products = require("../models/products");

module.exports = {
  getProductById: (req, res) => {
    const { id } = req.params;
    const found = products.filter(product => product.id === id);
    res.status(200).json(found);
  },
  getProductsSorted: (req, res) => {
    const { sort } = req.query;
    let productsCopy = products;
    if (sort === "descend") {
      productsCopy.sort((a, b) => {
        b.price - a.price;
      });
      res.status(200).json(productsCopy);
    } else if (sort === "ascend") {
      productsCopy.sort((a, b) => {
        a.price - b.price;
      });
      res.status(200).json(productsCopy);
    } else {
      res.status(200).json(productsCopy);
    }
  }
};
