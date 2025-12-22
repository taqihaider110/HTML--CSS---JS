// SecondComponent.js
import { useEffect } from "react";

function SecondComponent() {
  useEffect(() => {
    console.log("SecondComponent mounted"); // Step 4: runs only on initial render
  }, []); // empty dependency array = only runs once

  return <div>This is the second component!</div>;
}

export default SecondComponent;
