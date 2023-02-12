const Product = require("../models/index");

const getAllProducts = async (request, response) => {
  let queryObject = {};
  const { category } = request.query;

  let page = parseInt(request.query.page) || 1;
  let limit = parseInt(request.query.limit) || 9;

  let skip = (page - 1) * limit;

  category && (queryObject.category = category);

  try {
    const products = await Product.find(queryObject).skip(skip).limit(limit);
    response.status(200).json({
      message: "success",
      data: products,
      dataLength: products.length,
    });
  } catch (error) {
    response
      .status(501)
      .json({ message: "failed", data: "Internal Error Occured" });
  }
};

const getSingleProduct = async (request, response) => {
  const { id } = request.params;
  try {
    const product = await Product.findById(id);
    response.status(200).json({
      message: "success",
      data: product,
    });
  } catch (error) {
    response
      .status(501)
      .json({ message: "failed", data: "Internal Error Occured" });
  }
};

const getAllCategories = async (_, response) => {
  try {
    const products = await Product.find();
    const categories = Array.from(
      new Set(
        products.map((currElem) => {
          return currElem.category;
        })
      )
    );

    console.log(categories);
    response.status(200).json({ message: "success", data: categories });
  } catch (error) {
    response
      .status(501)
      .json({ message: "failed", data: "Internal Error Occured" });
  }
};

module.exports = { getAllProducts, getAllCategories, getSingleProduct };
