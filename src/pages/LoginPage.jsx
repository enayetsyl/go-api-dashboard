import { useState,useEffect } from "react"
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import {  toast } from 'react-toastify';
import  Axios  from "axios";
import { useLocation,useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
 

 
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const postLoginData = async (userData) => {
    try {
      const response = await Axios.post(`http://localhost:5000/api/auth/login`, userData, {
        withCredentials: true 
      });
      const data = await response?.data;
      toast.success(data?.message)
      navigate(location?.state ? location.state.from : '/')
      console.log(data)
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error(error.response.data.message)
    }
  }
  

  const handleLogin = () => {
    // Email validity check
    if(!isValidEmail(email)){
      toast.error("Invalid email")
      setEmail('')
      setPassword('')
      return
    }
    
    // Password length check
    if(password.length < 6){
      toast.error("Password must be 6 character long.")
      return
    }


    const LoginData = {
      email, password
    }

    postLoginData(LoginData)

    // console.log(signUpData)
  }
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="back-card min-w-sm mx-auto max-w-sm w-full">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <h1 className="text-3xl font-semibold">Login</h1>
          <Input
          label='Email'
          placeholder='Email'
          className='w-full'
          type='email'
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input
          label='Password'
          placeholder='Password'
          className='w-full'
          type='password'
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          />
         
          <Button className='rounded-lg py-2 px-4 w-full bg-slate-900 hover:bg-slate-800 transition-all duration-500'
          onClick={handleLogin}
          >Login</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage