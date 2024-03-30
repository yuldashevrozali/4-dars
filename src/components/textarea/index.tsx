import React, { ChangeEvent } from 'react';
import './index.css';

interface TextareaProps {
  value: (text: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ value }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    value(e.target.value);
  };

  return (
    <div>
      <label htmlFor="textarea">Izoh <span>*</span></label>
      <textarea
        onChange={handleChange}
        placeholder='Kompaniya haqida izoh qoldiring...'
        id='textarea'
        cols={50}
        rows={10}
      ></textarea>
    </div>
  );
};

export default Textarea;
