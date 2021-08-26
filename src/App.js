import React, { useEffect, useState } from "react";
import axios from "axios";
import TableCryptos from "./components/TableCryptos";

import "./App.css";

function App() {
  const fetchData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setcryptos(res);
  };

  const [cryptos, setcryptos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TableCryptos cryptos={cryptos}/>
    </div>
  );
}

export default App;
