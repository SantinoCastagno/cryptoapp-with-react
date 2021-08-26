import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const fetchData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    console.log(res);
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
