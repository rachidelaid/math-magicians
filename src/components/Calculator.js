import React from 'react';
import './Calculator.css';

import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

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

    const { total, next } = this.state;

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
              onClick={this.handleClick}
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
  }
}
