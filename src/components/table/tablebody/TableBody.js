import React from "react";

const TableBody = ({ investments }) => {
  return (
    <tbody>
      {investments.map((investment) => (
        <tr key={investment.year}>
          <td>{investment.year}</td>
          <td>${investment.savingsEndOfYear.toFixed(2)}</td>
          <td>${investment.yearlyInterest.toFixed(2)}</td>
          <td>${investment.totalInterest.toFixed(2)}</td>

          <td>
            $
            {(investment.savingsEndOfYear - investment.yearlyInterest).toFixed(
              2
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
