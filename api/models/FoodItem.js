const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemSchema = new Schema({
   name :{
    type: String,
    required : true
   },
   description :{
      type: String,
      required : true
   },
   restaurant : {
    type : String,
    required : true,
   },
   restaurant_name : {
      type : String,
      required : true,
     },
   rating : {
    type : String,
    required : true
   },
   price:{
      type: Number,
      required: true
   }
});

 const FoodItemModel = mongoose.model('FoodItem', FoodItemSchema);

module.exports = FoodItemModel;    