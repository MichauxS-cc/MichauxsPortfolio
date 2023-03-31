import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api")
    .then((response) => {
      setData(response?.data);
      console.log(data.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.message}</h1>
      </header>
    </div>
  );
}

export default App;