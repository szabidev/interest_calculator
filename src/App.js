import Table from "./components/table/tablecontainer/Table";
import Form from "./components/form/formcontainer/Form";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [investments, setInvestments] = useState([]);
  const [calculatedData, setCalculatedData] = useState([]);
  const [isReset, setIsReset] = useState(false);

  const handleInvestment = (investment) => {
    setInvestments(investment);
  };

  const handleCalculatedData = (yearlyData) => {
    setCalculatedData(yearlyData);
  };

  const handleReset = (condition) => {
    setIsReset(condition);
  };

  return (
    <div>
      <Header />
      <Form
        handleInvestment={handleInvestment}
        handleCalculatedData={handleCalculatedData}
        setReset={handleReset}
      />
      <Table
        investments={calculatedData}
        reset={isReset}
        initialInvestment={investments}
      />
    </div>
  );
}

export default App;
