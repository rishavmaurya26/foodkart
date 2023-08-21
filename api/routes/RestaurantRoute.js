const express = require('express');
const router = express.Router();
const Restaurant =  require('../models/Restaurant');
const foodItem = require('../models/FoodItem');
const cors = require('cors'); // will be used to maker request to a backend server from a different domain or source
//cors middeware

 router.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
 }))

router.get('/',async(req,res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
})

router.post("/",async (req,res)=>{
    const {name,address,cuisine,menu,Nonveg,rating} = req.body
    try{
        const restaurant =  await Restaurant.create({
            name,address,cuisine,menu,Nonveg,rating 
        })
        return res.json(restaurant)
    }
    catch(e){
        console.log(e)
        console.log("restaurant was not added")
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    var foodItems = await foodItem.find({restaurant: id})
    return res.json(foodItems)
})

module.exports = router
