import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import './Login.css'
import Button from 'react-bootstrap/Button'

export default function Login() {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:"",
    password:""
  })

  const loginUser =async (e) => {
      e.preventDefault();
      const userdata = data;
      try{
        const res = await axios.post("./",userdata)
       // console.log(res.data)
        if(res.data.error)
          toast.error(res.data.error)
        else {
          setData({})
          toast.success("login successful")
          navigate("/home")
           window.location.reload()
        }
    }
    catch(error){
      console.log(error)
    }
    
  }
  // window.location.reload()
  return (
    <div>
       <div className='formpage-container' id="signin">
      <div className="container-fluid register-form d-flex flex-column align-items-center justify-content-center p-5">
          <h6>Use placeholder as credential to login</h6>
        <div className="form-container-sign my-4 col-4 d-flex justify-content-center">
          <form className="row g-3" onSubmit={loginUser}>
            <div className="col-md-12 my-1">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control border-secondary" placeholder="rishav@gmail.com" id="inputEmail4"  value = {data.email} onChange={(e)=> setData({...data,email:e.target.value})}  />
            </div>
            <div className="col-md-12 my-1">
              <label className="form-label">Password</label>
              <input type="password" className="form-control border-secondary" id="inputPassword4" placeholder="Rishav26$" value = {data.password} onChange={(e)=> setData({...data,password:e.target.value})} />
            </div>
            <div className="col-5 my-2">
            <Button variant="dark" onClick={loginUser}>Sign In</Button>
            </div>
            <div className="col-7 d-flex align-items-end justify-content-end my-2">
              <Link to="/register" style={{ color: "black" }}>Don't have an account Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
