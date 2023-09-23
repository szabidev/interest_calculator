import React, { useState } from "react";
import FormInput from "../forminput/FormInput";

const Form = ({ handleInvestment, handleCalculatedData, setReset }) => {
  const [currentSaving, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedRetrun, setExpectedReturn] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const handleCurrentSavings = (e) => {
    setCurrentSavings(e.target.value);
  };
  const handleYearlySavings = (e) => {
    setYearlySavings(e.target.value);
  };
  const handleExpectedReturn = (e) => {
    setExpectedReturn(e.target.value);
  };
  const handleInvestmentDuration = (e) => {
    setInvestmentDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const investmentData = {
      current: currentSaving,
      yearly: yearlySavings,
      expected: expectedRetrun,
      duration: investmentDuration,
    };

    handleInvestment(investmentData);
    handleCalculatedData(calculateHandler(investmentData));
    setReset(false);
    console.log(investmentData);
  };

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current"];
    const yearlyContribution = +userInput["yearly"];
    const expectedReturn = +userInput["expected"] / 100;
    const duration = +userInput["duration"];

    let cumulativeInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      cumulativeInterest += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: cumulativeInterest,
      });
    }
    console.log(yearlyData);
    return yearlyData;
  };

  const handleReset = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setInvestmentDuration("");
    setReset(true);
  };

  const inputName = [
    "current-savings",
    "yearly-contribution",
    "expected-return",
    "duration",
  ];

  const inputTitle = [
    "Current Savings ($)",
    "Yearly Savings ($)",
    "Expected Interest (%, per year)",
    "Investment Duration (years)",
  ];

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <FormInput
          inputName={inputName[0]}
          inputTitle={inputTitle[0]}
          saveData={handleCurrentSavings}
          dataValue={currentSaving}
        />
        <FormInput
          inputName={inputName[1]}
          inputTitle={inputTitle[1]}
          saveData={handleYearlySavings}
          dataValue={yearlySavings}
        />
      </div>
      <div className="input-group">
        <FormInput
          inputName={inputName[2]}
          inputTitle={inputTitle[2]}
          saveData={handleExpectedReturn}
          dataValue={expectedRetrun}
        />
        <FormInput
          inputName={inputName[3]}
          inputTitle={inputTitle[3]}
          saveData={handleInvestmentDuration}
          dataValue={investmentDuration}
        />
      </div>
      <p className="actions">
        <button type="reset" onClick={handleReset} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
