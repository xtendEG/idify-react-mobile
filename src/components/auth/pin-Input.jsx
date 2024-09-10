import React, { useState } from 'react';

const PinInput = ({ length = 4, onComplete }) => {
  const [values, setValues] = useState(Array(length).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Move to the next input field
      if (index < length - 1) {
        document.getElementById(`pin-input-${index + 1}`).focus();
      }

      // Trigger onComplete if all inputs are filled
      if (newValues.every(val => val !== '')) {
        onComplete(newValues.join(''));
      }
    } else if (value === '') {
      const newValues = [...values];
      newValues[index] = '';
      setValues(newValues);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      document.getElementById(`pin-input-${index - 1}`).focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {values.map((val, index) => (
        <input
          key={index}
          id={`pin-input-${index}`}
          type="text"
          maxLength="1"
          value={val}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-[60px] h-[60px] text-center border border-gray-300 rounded-[20px] focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default PinInput;
