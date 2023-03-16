import React, { useState, useEffect } from "react";
import RatesList from "../rates-list/rates-list";
import './app.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/rates");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="container">
          <img src="/logo192.png" alt="React logo" />
          <p>React App for <span>Loopla</span></p>
        </div>
      </div>
      <RatesList data={data} />
      <div className="footer"></div>
    </div>
  );
}

export default App;