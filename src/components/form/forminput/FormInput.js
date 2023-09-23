import React from "react";

const FormInput = ({ inputName, inputTitle, saveData, dataValue }) => {
  return (
    <p>
      <label htmlFor={inputName}>{inputTitle}</label>
      <input
        type="number"
        id={inputName}
        onChange={saveData}
        value={dataValue}
      />
    </p>
  );
};

export default FormInput;
