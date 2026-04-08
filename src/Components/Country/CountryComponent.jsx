import { React, useState, useEffect } from "react";
import { get, getOne } from "../api/PostAxios";

function CountryComponent() {
  let [inp, setInp] = useState("");
  let [arr, setArr] = useState([]);
  let [specific, setSpecific] = useState([""]);
  let [contryExist, setCountryExist] = useState(true);

  function setVal(event) {
    setInp(event.target.value);
  }

  async function getData() {
    let res = await get();
    setArr(res.data);
  }

  async function getSpecific() {
    try {
      setCountryExist(true);

      if (inp === "") {
        setSpecific([""]);
      } else {
        let res = await getOne(inp);
        setSpecific(res.data);
      }
    } catch {
      setCountryExist(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function SubmitButton(event) {
    event.preventDefault();
    getSpecific();
  }

  return (
    <div style={{ padding: "20px", background: "#f4f6f9", minHeight: "100vh" }}>

      {/* 🔍 SEARCH BAR (FIXED) */}
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          gap: "10px"
        }}
      >
        <input
          type="text"
          placeholder="Search country..."
          value={inp}
          onChange={setVal}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={SubmitButton}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "6px",
            background: "#0747a8",
            color: "white",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </form>

      {/* ❌ ERROR */}
      {!contryExist && (
        <h3 style={{ textAlign: "center", color: "red" }}>
          Country not found ❌
        </h3>
      )}

      {/* 🌍 FLAGS SECTION */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {contryExist &&
          (Boolean(specific[0] !== "")
            ? specific.map((ele) => (
                <div
                  key={ele.name.official}
                  style={{
                    background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    width: "18vw"
                  }}
                >
                  <img
                    src={ele.flags.png}
                    style={{
                      width: "15vw",
                      height: "20vh",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                  <h6 style={{ marginTop: "10px" }}>
                    {ele.name.official}
                  </h6>
                  <p style={{ fontSize: "14px", color: "gray" }}>
                    {ele.capital?.[0] || "No capital"}
                  </p>
                </div>
              ))
            : arr.map((ele) => (
                <div
                  key={ele.name.official}
                  style={{
                    background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    width: "18vw"
                  }}
                >
                  <img
                    src={ele.flags.png}
                    style={{
                      width: "15vw",
                      height: "20vh",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                  <h6 style={{ marginTop: "10px" }}>
                    {ele.name.official}
                  </h6>
                  <p style={{ fontSize: "14px", color: "gray" }}>
                    {ele.capital?.[0] || "No capital"}
                  </p>
                </div>
              )))}
      </div>
    </div>
  );
}

export default CountryComponent;