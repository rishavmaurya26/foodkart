const express = require('express') 
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cookieParser =  require('cookie-parser')
const app = express()
const router = require('./routes/AuthRoutes')
const foodItemRouter =  require('./routes/FoodItemRoute')
const restaurantrouter =  require('./routes/RestaurantRoute')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Databse connection established"))
.catch((err) => console.error("Database not connected. ".err))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended:false }))
app.use('/',router)
app.use('/restaurant',restaurantrouter)
app.use('/foodItem',foodItemRouter)



const port = 8000
app.listen(port, () => {console.log('listening on port 8000')})