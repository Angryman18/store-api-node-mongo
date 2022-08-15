const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.route("/getAllProduct").get(productController.getAllProduct);

module.exports = router;
