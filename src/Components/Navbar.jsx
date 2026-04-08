import React from "react"
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div style={{display:"flex",justifyContent:"space-evenly",width:"99vw",height:"10vh",backgroundColor:"#0F2A44",color:"#FFFFFF",alignItems:"Center"}}>
        <div style={{width:"30vw",justfiyContent:"center"}}><h2>Visionary World</h2></div>
        <Link to="/" style={{color:"white"}}><h4>Home</h4></Link>
        <Link to="/contact"style={{color:"white"}}><h4>Contact</h4></Link>
        <Link to="/about"style={{color:"white"}}><h4>About</h4></Link>
        <Link to="/country"style={{color:"white"}}><h4>Country</h4></Link>
        </div>
    )
}
export default Navbar;