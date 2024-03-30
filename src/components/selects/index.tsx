import React from 'react';

interface SelectProps {
  text: string;
  value1: string;
  value2: string;
  value3: number;
  value4: number;
  value5: number;
}

const Select: React.FC<SelectProps> = ({ text, value1, value2, value3, value4, value5 }) => {
  return (
    <>
      <label htmlFor="select">
        {text} <span>*</span>
      </label>
      <select id='select'>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={String(value3)}>{value3}</option>
        <option value={String(value4)}>{value4}</option>
        <option value={String(value5)}>{value5}</option>
      </select>
    </>
  );
};

export default Select;
