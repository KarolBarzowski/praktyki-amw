import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const { apiId } = useParams();

  useEffect(() => {
    if (apiId) {
      fetch(`http://127.0.0.1:8000/${apiId}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [apiId]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          <img src={item.image} alt={item.name} />
          <h1>{item.name}</h1>
          {item.color ? (
            <h3>
              Color: <span style={{ color: item.color }}>{item.color}</span>
            </h3>
          ) : null}
          {item.originCountry ? <h3>Origin country: {item.originCountry}</h3> : null}
        </li>
      ))}
    </ul>
  );
}

export default App;
