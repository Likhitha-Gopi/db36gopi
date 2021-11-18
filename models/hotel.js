const mongoose = require("mongoose") 
const hotelSchema = mongoose.Schema({ 
    hotelType: String, 
    price: Number, 
    capacity: String 
}) 
 
module.exports = mongoose.model("Hotels", 
hotelSchema)