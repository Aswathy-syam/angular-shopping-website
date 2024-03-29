const products = require("../models/productSchema");

const users=require('../models/userSchema')

//get all products

exports.getallProductcontrollers = async (req, res) => {
  try {
    const allProducts = await products.find();
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(401).json(err);
  }
};

//to get a single product

exports.getAproduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await products.findOne({ id });
    res.status(200).json(product);
  } catch (err) {
    res.status(401).json(err);
  }
};
