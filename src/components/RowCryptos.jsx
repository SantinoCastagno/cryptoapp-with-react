import React from "react";

function RowCryptos({crypto, index}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{crypto.name}</td>
    </tr>
  );
}

export default RowCryptos;
