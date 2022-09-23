import { useState } from "react";
export function Button() {
  var [data, setdata] = useState(0);
  function updatedata() {
    setdata(data + 1);
  }
  function decreament() {
    setdata(data - 1);
  }
  function zero() {
    setdata(data * 0);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button style={{ margin: "4px" }} onClick={updatedata}>
        increment
      </button>
      <button style={{ margin: "4px" }} onClick={decreament}>
        decrement
      </button>
      <button style={{ margin: "4px" }} onClick={zero}>
        {" "}
        Click to Zero
      </button>
    </div>
  );
}
