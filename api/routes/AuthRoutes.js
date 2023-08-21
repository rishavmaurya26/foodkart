const express = require('express');
const {registerUser, loginUser, getProfile}  = require("../controller/AuthController");
const router = express.Router();
const cors = require('cors'); // will be used to maker request to a backend server from a different domain or source
//cors middeware

 router.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
 }))

router.get('/', (req,res) => {
    res.json("backend is working");
})

router.post("/register",registerUser)

router.post("/",loginUser)

router.get("/profile", getProfile)

module.exports = router
