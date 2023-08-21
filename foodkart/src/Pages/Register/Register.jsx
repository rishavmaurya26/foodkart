import React, { useState } from 'react';
import "./Register.css";
import { Link,  } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import  Button from 'react-bootstrap/button'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Register() {
  var {user} = useContext(UserContext)
  console.log(user)
  if(!user)
  {
    navigate('/')
    window.location.reload()
  }
  const navigate = useNavigate()
  const [data,setData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    contact:"",
    password:""
  })

  const userRegister = async (e) => {
    e.preventDefault();
    const userdata = data;
    try{
        const res = await axios.post("./register",userdata)
        // console.log(res.data.error)
        if(res.data.error)
          toast.error(res.data.error)
        else {
          setData({})
          toast.success("account created successfully")
          navigate("/")
        }
    }
    catch(error){
      console.log(error)
    }
    
  }

  return (
    <div>
        <div className='formpage-container' id="register"> 
      <div className="register-form px-2 py-5">
        <div className="form-container  col-4">
          <form className="row g-3" onSubmit={userRegister}>
            <div className="col-md-6 my-1">
              <label for="First Name" className="form-label" >First Name</label>
              <input type="text" className="form-control border-secondary" id="First Name" value = {data.firstName} onChange={(e)=> setData({...data,firstName:e.target.value})} />
            </div>
            <div className="col-md-6 my-1">
              <label for="Last Name" className="form-label">Last Name</label>
              <input type="text" className="form-control border-secondary" id="Last Name" value = {data.lastName} onChange={(e)=> setData({...data,lastName:e.target.value})}/>
            </div>
            <div className="col-md-6 my-1">
              <label for="inputEmail4" className="form-label" >Email</label>
              <input type="email" className="form-control border-secondary" id="inputEmail4" value = {data.email} onChange={(e)=> setData({...data,email:e.target.value})} />
            </div>
            <div className="col-md-6 my-1">
              <label for="contactnumber" className="form-label" >Contact Number</label>
              <input type="number" className="form-control border-secondary" id="contactnumber" value = {data.contact} onChange={(e)=> setData({...data,contact:e.target.value})}  />
            </div>
            <div className="col-md-6 my-1">
              <label for="inputPassword4" className="form-label" >Password</label>
              <input type="password" className="form-control border-secondary" id="inputPassword4" value = {data.password} onChange={(e)=> setData({...data,password:e.target.value})}  />
            </div>
            <div className="col-md-6 my-1">
              <label for="inputPasswordConfirm4" className="form-label" >Confirm Password</label>
              <input type="password" className="form-control border-secondary" id="inputPasswordConfirm4" />
            </div>
            <div className="col-5 my-2">
              <Button variant='dark' onClick={userRegister}>Register</Button>
            </div>
            <div className="col-7 d-flex align-items-end justify-content-end my-2">
              <Link to="/" className='' style={{ color: "black" }}>Already have an account sign-in</Link>
            </div>
          </form>
        </div>
      </div>

    </div>
    </div>
  )
}

