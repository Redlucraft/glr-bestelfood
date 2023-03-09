const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {type: String, required: true}
    }
)
const ProductScheme = new Schema(
    {
        name: {type: String, required: true},
        adjective:{type: String, required: true},
        description: { type: String, required: true},
        prize: {type: String, required: true},
        category: {type: String, required: true}
    }
)

module.exports = mongoose.model('product', ProductScheme)