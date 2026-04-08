import { get } from "../api/PostAxios.jsx";
import { useEffect, useState } from "react";

function Hero() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await get();
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        width: "95vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2vw",
        padding: "2vh",
      }}
    >
      {data.map((ele, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "rgba(200, 220, 240,0.5)",
            width: "20vw",
           height:"14vh",
            minWidth: "10vw",
            padding: "1vh",
            borderRadius:"1vw",
            boxShadow: "3px 5px 10px grey",
            display:"flex",
            flexDirection:"column",
            
           
            
          }}
        >
          <h2 style={{fontWeight:400,fontSize:"25px"}}>{ele.name.official}</h2>
          
        </div>
      ))}
    </div>
  );
}

export default Hero;
