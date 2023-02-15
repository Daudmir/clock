import * as React from 'react'
import { useState } from 'react';

function Homepage() {
    const [show, toggleShow] =
    useState(true);
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(myInterval);
    }
  })

  return (
    <div className="App">
        <button onClick={() =>
        toggleShow(!show)}>
            {show ? "Hide" : "Show"}
        </button>
        {show && <h2>{time}</h2>}
    </div>
);
}



export default Homepage;