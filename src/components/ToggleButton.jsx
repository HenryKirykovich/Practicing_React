import React, { useState } from "react";

const ToggleButton = () => {
  const [status, setStatus] = useState("NO SIGNAL");

  const handleToggle = () => {
    setStatus(status === "OFF" ? "ON" : "OFF");
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <p>Status: {status}</p>
    </>
  );
};

export default ToggleButton;



























