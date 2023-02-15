import * as React from 'react'
import { useState } from 'react';

function Homepage() {
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
      <h1>{time}</h1>
    </div>
  );
}

export default Homepage;