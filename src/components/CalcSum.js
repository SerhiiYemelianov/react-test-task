import React, { useState } from 'react';

const CalcSum = () => {
  
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [setTotal] = useState(0);

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  }

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  }

  const handleValue3Change = (e) => {
    setTotal(value1 * value2);
  }

  return (
    <div>

      <label>
        Цена:
        <input type="number" value={value1} onChange={handleValue1Change} required />
      </label>

      <label>
        Количество:
        <input type="number" value={value2} onChange={handleValue2Change} required />
      </label>

      <label>
        Сумма:
        <input type="text" value={value1 * value2} onChange={handleValue3Change} required />
      </label>

    </div>
  );
}

export default CalcSum;