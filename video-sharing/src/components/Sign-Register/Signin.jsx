import './Style.css'
import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SingIn(){
    const navigate = useNavigate();
    const navigate1=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");

    const loginuser=async (e)=>{
        e.preventDefault();

        axios.post("https://videosharing-balaji.onrender.com/signin",{email,password})
        .then((res)=>{
            localStorage.setItem("mytoken",res.data.Token);
            window.alert("Signin successful")
            navigate1("/");
        }).catch((err)=>{
            window.alert("Invalid Credentials")
        })

        
    }
    return (<>
        <main>
            <section className="sec-first">
                <img src="https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg" alt=""/>
                <div className='logo'>
                <h1>Tuner</h1>
                <div >Made in INDIA platform to Solve the hassle of video delivery by packing transcoding, storage, security, and video player into a powerful but straightforward package. Stream anywhere. Without buffering!</div>
                
                </div>
                <button  onClick={() => navigate('/register')}>Register</button>
            </section>
            <section className="sec-second">
                <form  className='formdata' method='POST'>
                    <h1>Sign in</h1>
                    <div>Sign in to continue access pages</div><br />
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                    <input type="password" name="passord" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                    <input  className="submit" type="submit" name="signup" id="signup" value="Signin" onClick={loginuser}></input><br />
                </form>
            </section>
        </main>
    </>);
}
export default SingIn;