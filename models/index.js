const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Not Specified Title!"],
  },
  discountedPrice: {
    type: Number,
    required: [true, "Not Specified Discounted Price!"],
  },
  originalPrice: {
    type: Number,
    required: [true, "Not Specified Original Price!"],
  },
  rating: {
    type: Number,
    required: [true, "Not Specified Product Rating!"],
  },
  category: {
    type: String,
    enum: {
      values: [
        "laptops",
        "accessories",
        "smartphones",
        "cameras",
        "headphones",
      ],
    },
  },
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
