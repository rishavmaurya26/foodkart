const mongoose = require("mongoose");
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
   name :{
    type: String,
    required : true
   },
   address : {
    type : String,
    required : true,
    unique : true
   },
   
   cuisine:{
    type: String,
    required : true
   },
   menu :{
    type : Array,
    required : true
   },
   Nonveg :{
    type: Boolean,
    required: true
   },
   rating : {
      type : String,
      required : true
     }
});

 const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantModel;    