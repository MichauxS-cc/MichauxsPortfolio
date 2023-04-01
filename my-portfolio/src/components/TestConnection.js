import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./css/TestConnections.css";
import axios from "axios";


function TestConnections() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api")
    .then((response) => {
      setData(response?.data);
      console.log(data.message);
    });
  }, []);

  return (
    <div className="TestConnections">
      <header className="TestConnections-header">
        <img src={logo} className="TestConnections-logo" alt="logo" />
        <h1>{data.message}</h1>
      </header>
    </div>
  );
}

export default TestConnections;