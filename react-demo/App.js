import { useState } from "react";

function WelcomeMessage({ name }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "2rem auto",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        border: "1px solid #e0e0e0",
      }}
    >
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#2c3e50",
          textAlign: "center",
        }}
      >
        Welcome to TechWave Car Wash, {name || "Valued Customer"}!
      </h1>

      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          backgroundColor: "#3498db",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "600",
          display: "block",
          margin: "0 auto",
        }}
      >
        {showMessage ? "Hide Details" : "Show Services"}
      </button>

      {showMessage && (
        <div style={{ marginTop: "1.5rem", color: "#34495e" }}>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            Our Premium Services:
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            <li>
              <strong>Basic Wash:</strong> k60 - Exterior rinse and dry
            </li>
            <li>
              <strong>Premium Wash:</strong> k85 - Includes wheel cleaning
            </li>
            <li>
              <strong>Full Detail:</strong> k200 - Interior and exterior deep
              clean
            </li>
          </ul>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <button
              style={{
                backgroundColor: "#2ecc71",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
            <button
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Special Offers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f1f1f1",
        backgroundImage:
          'url("https://c7.alamy.com/comp/KP9M23/car-being-washed-by-scrubbing-brush-KP9M23.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <WelcomeMessage name="Lottie" />
    </div>
  );
}
