const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllCategories,
  getSingleProduct,
} = require("../controllers/index");

router.route("/").get(getAllProducts);
router.route("/categories").get(getAllCategories);
router.route("/:id").get(getSingleProduct);

module.exports = router;
