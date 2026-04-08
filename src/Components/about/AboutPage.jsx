import AboutComponent from "./AboutComponent.jsx"
import {get} from "../api/PostAxios.jsx"
import {React,useEffect,useState} from "react"
import Navbar from "../Navbar.jsx"
import Footer from "../Footer.jsx"

function AboutPage(){
    let [data,setData]=useState([]);
    async function getData(){
        let res=await get();
        setData(res.data)
       console.log(res.data)
    }
    useEffect(()=>{
    getData();
    },[])
return (
    <>
    <Navbar/>
       <h1 style={{color:"darkblue",display:"flex",justifyContent:"center"}}>About All Countries</h1>
     <div style={{display:'flex',justifyContent:"center",flexWrap:"wrap"}}>
    {data.map((ele)=>{return <AboutComponent name={ele.name.common} capital={ele.capital[0]} region={ele.region} population={ele.population}></AboutComponent>})}
     </div>
    <Footer></Footer>
    </>
)
}
export default AboutPage