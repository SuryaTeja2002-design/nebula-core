import React, { useEffect, useState } from "react";
import { fetchLatestAlert } from "./api";

function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await fetchLatestAlert();
      if (result && result.fraud) {
        setAlert(result.reason);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🛡️ NebulaCore Dashboard</h1>
      {alert ? (
        <div style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ FRAUD DETECTED: {alert}
        </div>
      ) : (
        <p>No fraud detected</p>
      )}
    </div>
  );
}

export default App;
