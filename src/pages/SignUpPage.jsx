import { useEffect, useState } from "react"
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import {  toast } from 'react-toastify';
import  Axios  from "axios";
import { useLocation,useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in cookies
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const postSignUpData = async (userData) => {
    try {
      const response = await Axios.post(`http://localhost:5000/api/auth/signup`, userData, {
        withCredentials: true 
      })
      const data = await response.data;
      toast.success(data.message)
      navigate(location?.state ? location.state.from : '/')
      console.log(data)
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error(error.response.data.message)
    }
  }
  

  const handleSignUp = () => {
    // Email validity check
    if(!isValidEmail(email)){
      toast.error("Invalid email")
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      return
    }
    
    // Password length check
    if(password.length < 6){
      toast.error("Password must be 6 character long.")
      return
    }

    // Password and confirm password check
    if(password !== confirmPassword){
      toast.error("Password does not match.")
      setPassword("")
      setConfirmPassword("")
      return
    }

    const signUpData = {
      email, password, confirmPassword
    }

    postSignUpData(signUpData)

    // console.log(signUpData)
  }
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="back-card min-w-sm mx-auto max-w-sm w-full">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
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
          <Input
          label='Confirm Password'
          placeholder='Confirm Password'
          className='w-full'
          type='password'
          value = {confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button className='rounded-lg py-2 px-4 w-full bg-slate-900 hover:bg-slate-800 transition-all duration-500'
          onClick={handleSignUp}
          >Signup</Button>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage