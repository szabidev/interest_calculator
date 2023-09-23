import React from "react";
import TableHeader from "../tableheader/TableHeader";
import TableBody from "../tablebody/TableBody";

const Table = ({ investments, reset, initialInvestment }) => {
  return investments.length === 0 || reset ? (
    <p className="no-data">No data, complete the form</p>
  ) : (
    <table className="result">
      <TableHeader />
      <TableBody investments={investments} />
    </table>
  );
};

export default Table;
