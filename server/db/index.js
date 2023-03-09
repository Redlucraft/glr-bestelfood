const mongoose = require("mongoose");

mongoose
.connect("mongodb//redlucraft:pOxDDGNdFHXwpbcD@glr-bestelfood.wfm6bgp.mongodb.net/food-ordering")
.catch(e => {
    console.error("Connection error", e.message)
})

const db = mongoose.connection
module.exports = db;