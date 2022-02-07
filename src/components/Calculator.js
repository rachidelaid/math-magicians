import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

    return (
      <section className="calculator">
        <div className="input">0</div>
        <div className="buttons">
          {btns.map((btn) => (
            <button
              type="button"
              key={btn}
              id={btn}
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
  }
}
