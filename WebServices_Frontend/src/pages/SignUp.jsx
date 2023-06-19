import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const validSchema = yup.object().shape({
  names:yup.string().required("Names are required").min(6),
  nid:yup.string().length(16,"NID length is 16").required("National ID is required"),
  email: yup.string().email().required("Email is required"),
  phone:yup.string().required(),
  password: yup.string().required("Password is required").min(8).max(32),

})
const SignUp = () => {
  const navigate = useNavigate();
  const {register, handleSubmit,formState :{errors},reset} = useForm({resolver:yupResolver(validSchema)});
  const [data,setData] = useState({
    names:"",
    nid:"",
    email:"",
    phone:"",
    password:""
  });
  const toLogin = ()=>{
    navigate("/login");
  }
  const onSubmitHandler = async(data,e)=>{
    e.preventDefault();
    console.log({data});

    try{

      const res = await axios.post("/u/addUser",data);    
      console.log(res.data);
      toast.success("User added successfully");
      localStorage.setItem("token", res.data.token);
      navigate('/login');
    }catch(e){
      console.log(e);
      toast.error(e.response.data.message);
      console.log(e.response.data.message);
    }
    reset();
  }

  return (
    <div className=" w-full h-full flex ">
    <div className="w-2/4 bg-blue-600 h-[100vh]">
        <div className="flex flex-col justify-around h-full my-auto">
             <p className="font-bold m-auto text-4xl text-white">Management system</p>
        </div>
  
    </div>

    <div className="w-2/4 m-auto ">
  <form className="w-[60%] m-auto" onSubmit={handleSubmit(onSubmitHandler)}>
    <div className=" flex-col items-center my-8">
        <p className="font-bold text-3xl text-center">Sign up</p>
         <p className="text-gray-400 text-center">Create account to use our services</p>
    </div>
<div className="mb-2">
<label  className="block mb-2 text-sm font-medium text-gray-900">Names</label>
<input type="text"{...register("names")}  id="names" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Enter your names" />
<p className="text-red-800">{errors.names?.message}</p>
</div>
<div className="mb-2">
<label  className="block mb-2 text-sm font-medium text-gray-900">National ID</label>
<input type="text" id="NID"{...register("nid")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"  placeholder='Enter your national ID' />
<p className="text-red-800">{errors.nid?.message}</p>
</div>
<div className="mb-2">
<label  className="block mb-2 text-sm font-medium text-gray-900">Email</label>
<input type="text" id="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  placeholder='Enter your email'/>
<p className="text-red-800">{errors.email?.message}</p>
</div>
<div className="mb-2">
<label  className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
<input type="text" id="phone" {...register("phone")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  placeholder='Enter your phone number'/>
<p className="text-red-800">{errors.phone?.message}</p>
</div>
<div className="mb-2">
<label  className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
<input type="password" id="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  placeholder='Enter your password'/>
<p className="text-red-800">{errors.password?.message}</p>
</div>  

<button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign up</button>
</form>
<div className="flex justify-center mt-6">
<p>Already have an account?</p><p className='text-blue-500 px-2 font-bold' onClick={toLogin}>Login</p>
</div>  
</div>

</div>
  )
}

export default SignUp
