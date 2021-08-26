import React from "react";
import RowCryptos from "./RowCryptos";

const titles = ["#", "Crypto name", "Symbol",  "Price", "Price Change", "24h volume"];

const TableCryptos = ({ cryptos }) => {
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto, index) => (
          <RowCryptos key={crypto.symbol} crypto={crypto} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCryptos;
