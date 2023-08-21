const bcrypt = require('bcrypt');
const { response } = require("express")
const User = require("../models/User") 
 const jwt =  require('jsonwebtoken');
const regexp = new RegExp("/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/")



const registerUser = async (req,res) => {
        try {
            var {firstName, lastName, email, contact, password} = req.body
        if(!firstName)
        {
           return res.json({error:"firstname is required"})
        }
        if(!email)
        {
           return res.json({error:"email is required"})
        }  
        if(!contact)
        {
           return res.json({error:"contact is required"})
        }
        if(!password ||  regexp.test(password))
        {
           return res.json({error:"password is required and must be between 7-15 characters long have a numeric, special, upperlower case letter"})
        }
        const exist = await User.findOne({email})
        if(exist)
        {
            return res.json({error:"email is already in use"})
        }
        var name = firstName.concat(" ",lastName)
        password = await bcrypt.hash(password, 10);
        const user =  await User.create({
            name,email, contact, password 
        })
        return res.json(user)
        } 
        catch (err) {
            console.log(err)
        }
}



const loginUser = async (req, res) => {
    try{
        var {email, password} = req.body
        if(!email)
        {
            return res.json({error : "enter email"})
        }
        if(!password)
        {
            return res.json({error : "enter password"})
        }
        const user = await User.findOne({email})
        // console.log(exit)
        if(!user)
        {
            return res.json({error:"Email does not exist. Please create an account"})
        }
        const match =await bcrypt.compare(password,user.password)
        if(!match)
        {
            return res.json({error:"wrong password"})
        }
        jwt.sign({email:user.email, id:user._id, name: user.name}, process.env.JWT_SECRET, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token',token).json(user)

        })
    }
    catch (err) {
        console.log(err)
    }
    
}

const getProfile = (req,res) =>{
    const {token} = req.cookies
    if(token)
    {
        jwt.verify(token, process.env.JWT_SECRET,{},(err,user)=>{
            if(err) throw err
            res.json(user)
        })
    }
    else res.json({message : "context api not working"})
}

module.exports = {registerUser,loginUser, getProfile}