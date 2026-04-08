function AboutComponent({ name, capital, region, population }) {
  return (
    
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "18px",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        width: "18vw",
        minWidth: "240px",
        border: "1px solid #eaeaea",
        transition: "all 0.25s ease",
        margin:"10px"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
      }}
    >
     
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <h6
          style={{
            margin: 0,
            fontWeight: "700",
            fontSize: "20px",
            color: "#212529"
          }}
        >
          {name}
        </h6>
      </div>

      {/* Info (flex column) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "14px",
          color: "#495057"
        }}
      >
        <div>
          <span style={{ fontWeight: "500" }}>Capital</span>
          <div style={{ color: "#6c757d" }}>
            {capital || "N/A"}
          </div>
        </div>

        <div>
          <span style={{ fontWeight: "500" }}>Region</span>
          <div style={{ color: "#6c757d" }}>
            {region}
          </div>
        </div>

        <div>
          <span style={{ fontWeight: "500" }}>Population</span>
          <div style={{ color: "#6c757d" }}>
            {population?.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;