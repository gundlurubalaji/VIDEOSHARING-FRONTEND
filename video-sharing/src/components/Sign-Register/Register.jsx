import "./Style.css"
import React,{useState }from "react";


import {  useNavigate } from 'react-router-dom';


const Register=()=>{
    const navigate = useNavigate();
    const navigate1=useNavigate();
    const [user,setUser]=useState({name:"",email:"",phone:"",profession:"",password:"",cpassword:""});
    
    let name,value;
    const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }

   const Postdata=async (e)=>{
    e.preventDefault();
    const {name,email,phone,profession,password, cpassword}=user;
    if(password !== cpassword){
      window.alert("password doesn't match conform password")
    }
    else{
      const res=await fetch("https://videosharing-balaji.onrender.com/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,profession,password})
    })
     const data=await res.json();
     if(data.status==="Failed" || !data){
       window.alert(data.message)
     }
     else{
       window.alert("registration successful")
       navigate1("/sign")
     }
    }
    }
    

  return(
        <>
       <main>
            <section className="sec-first">
            <img src="https://w0.peakpx.com/wallpaper/335/158/HD-wallpaper-flower-amoled-android-apple-black-dark-galaxy-ios-iphone-note-samsung-thumbnail.jpg" alt=""/>
                <div className='logo'>
                <h1 >Tuner</h1>
                <div >Register Now and 15 days Free trails</div>
                
                </div>
                <button  onClick={() => {navigate("/sign")}}>Sign in</button>
            </section>
            <section className="sec-second register">
                <form method="POST" className="formdata" >
                    <h1>Register</h1>
                    <div>Register to continue access pages</div>
                    <button id='btn-circle'>+</button><br />
                    <input type="text" name="name"  id="name" placeholder="Name" onChange={handleInputs} value={user.name}/><br />
                    
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleInputs}  value={user.email} /><br />
                    
                    <input type="number" name="phone" id="phone" placeholder="Phone" onChange={handleInputs}    value={user.phone} /><br />
                
                    <input type="text" name="profession" id="profession" placeholder="Profession" onChange={handleInputs}  value={user.profession}/><br />
                   
                    <input type="password" name="password" id="password" placeholder="Password" onChange={handleInputs}   value={user.password} /><br />
                 
                    <input type="password" name="cpassword" id="cpasswword" placeholder="Confirm Password" onChange={handleInputs}  value={user.cpassword} /><br />
                 
                    <input  className="submit" type="submit" name="signup" id="signup" value="Register" onClick={Postdata}></input><br />
                </form>
            </section>
        </main>
        </>
    )
}
export default Register;