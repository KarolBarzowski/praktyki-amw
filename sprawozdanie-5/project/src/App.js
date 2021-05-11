import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fruits/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data.map(({ name, image, color, originCountry }) => (
        <li key={name}>
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <h3>
            Color: <span style={{ color: color }}>{color}</span>
          </h3>
          <h3>Origin country: {originCountry}</h3>
        </li>
      ))}
    </ul>
  );
}

export default App;
