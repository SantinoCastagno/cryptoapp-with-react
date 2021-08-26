import React from "react";
import RowCryptos from "./RowCryptos";

const titles = ["#", "Crypto name", "Price", "Price Change", "24h volume"];

const TableCryptos = ({ cryptos }) => {
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto, index) => (
          <RowCryptos key={index + 1} crypto={crypto} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCryptos;
