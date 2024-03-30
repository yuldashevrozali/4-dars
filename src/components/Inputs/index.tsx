import React from 'react';

interface InputProps {
  text: string;
  type: string;
  length: number;
  value: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({ text, type, length, value }) => {
  return (
    <>
      <label htmlFor="text">
        {text} <span>*</span>
      </label>
      <br />
      <input onChange={(e) => value(e.target.value)} maxLength={length} id='text' placeholder={text} type={type} />
    </>
  );
};

export default Input;
