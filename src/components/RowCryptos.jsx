import React from "react";

function RowCryptos({ crypto, index }) {
  console.log(crypto);
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={crypto.image} alt={crypto.id} style={{width: '1.2rem'}} className='img-fluid me-2' />
        <span>{crypto.name}</span>
      </td>
      <td className='text-muted text-uppercase'>{crypto.symbol}</td>
      <td>{crypto.current_price}</td>
      <td className={crypto.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}>{crypto.price_change_percentage_24h}%</td>
      <td>{crypto.total_volume}</td>
    </tr>
  );
}

export default RowCryptos;
