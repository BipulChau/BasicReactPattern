import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Application(props) {
  const [name, setName] = useState("");

  function reset() {
    setName("");
  }

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please Enter Your Name"
      />
      {name && (
        <>
          <h1> Hello, {name}!</h1>
          <button onClick={reset}> Reset</button>
        </>
      )}
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
