import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String
});
export const  resModel = mongoose.models.restaurants || mongoose.model("restaurants", productModel);