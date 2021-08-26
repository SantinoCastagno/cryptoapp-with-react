import React from "react";

function RowCryptos({ crypto, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>{crypto.current_price}</td>
      <td>{crypto.price_change_percentage_24h}%</td>
      <td>{crypto.total_volume}</td>
    </tr>
  );
}

export default RowCryptos;
