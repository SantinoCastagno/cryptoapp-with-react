import React from "react";

const TableCryptos = ({ cryptos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">name</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto) => (
          <tr>{crypto.name}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCryptos;
