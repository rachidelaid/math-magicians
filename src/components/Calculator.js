import React, { useState } from 'react';
import './Calculator.css';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(state, e.target.name);

    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const btns = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const operators = '÷x-+=';

  const { total, next } = state;

  return (
    <section className="calculator">
      {total ? (
        <div className="input">{total}</div>
      ) : (
        <div className="input">{next}</div>
      )}

      <div className="buttons">
        {btns.map((btn) => (
          <button
            onClick={handleClick}
            type="button"
            key={btn}
            name={btn}
            className={`btn ${operators.includes(btn) ? 'operator' : ''} ${
              btn === '0' ? 'span-2' : ''
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Calculator;
