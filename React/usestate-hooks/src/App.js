// App.js
import { useState } from "react";
import SecondComponent from "./SecondComponent";

function App() {
  const [showSecond, setShowSecond] = useState(false); // Step 1: state

  function toggleComponent() {
    setShowSecond((prev) => !prev); // Step 2: toggle state
  }

  return (
    <div className="App">
      {!showSecond ? (
        <button onClick={toggleComponent}>Show Second Component</button>
      ) : (
        <SecondComponent /> // Step 3: conditional render
      )}
    </div>
  );
}

export default App;
