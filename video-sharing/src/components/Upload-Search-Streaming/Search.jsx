import React from "react"
import axios from "axios";
import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Home-Myvidoes/Navbar/Navbar";
import Card from "../Home-Myvidoes/Navbar/Card";

const Search = ()=>{
    const [videos, setVideos] = useState([]);
  const query = useLocation().search;
    console.log(query)
    useEffect(() => {
        axios.get(`https://video-sharing-platform.onrender.com/search${query}`)
            .then((res) => {
                setVideos(res.data)
            }).catch((err) => {
                console.log(err)
                window.alert("something went wrong")

            })
    }, [query]);
  console.log(videos[0])
    return <>
        <Navbar />
        <div style={{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"space-around",marginTop:"20px"}}>
            {videos.map((data)=>{
                return <Card data={data}/>
            })}
        </div>
    </>
}
export default Search