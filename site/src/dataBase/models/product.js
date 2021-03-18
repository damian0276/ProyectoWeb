const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema ({
        name: String,
        precio: Number,
        description: String,
        cover: String
});
module.exports = mongoose.mode('Product',ProductSchema);