import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  // The current state ==> a variable
  // A function that updates the state.

  const handleChange = (event) => {
    setBackgroundColor(event.target.value);
    console.log(backgroundColor);
    // console.log(event.target.value);
    // console.log(event);
  };

  return (
    // <div className="app" style={{ backgroundColor: backgroundColor }}></div>
    <div className="app" style={{ backgroundColor }}>
      <span>Seleccion un color:</span>
      <input
        type="color"
        placeholder="#FF0000"
        onChange={handleChange}
        value={backgroundColor}
      />
    </div>
  );
}

export default App;
