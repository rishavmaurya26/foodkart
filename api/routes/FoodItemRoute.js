const express = require('express');
const router = express.Router();
const FoodItem =  require('../models/FoodItem')
const cors = require('cors'); // will be used to maker request to a backend server from a different domain or source
//cors middeware

  router.use(cors({
     credentials:true,
     origin: 'https://foodkart2606.netlify.app'
}))

router.get('/',(req,res) => {
    res.json("foodItem route is working properly");
})

router.post("/",async (req,res)=>{
    const {name,description,restaurant,rating,price} = req.body
    try{
        const foodItem =  await FoodItem.create({
            name,description,restaurant,rating,price 
        })
        return res.json(foodItem)
    }
    catch(e){
        console.log(e)
        console.log("foodItem was not added")
    }
})

module.exports = router


// 64dbb829042da82b72229bff
