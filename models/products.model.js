const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rpice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
