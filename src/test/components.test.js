import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '../components/Nav';
import Home from '../components/Home';
import Calculator from '../components/Calculator';

describe('Navbar Test',()=>{
  test('render nav bar', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    expect(getByText('Math Magicians')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <nav>
        <h1>
          Math Magicians
        </h1>
        <ul>
          <li>
            <a
              aria-current="page"
              class="active"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class=""
              href="/calculator"
            >
              Calculator
            </a>
          </li>
          <li>
            <a
              class=""
              href="/quote"
            >
              Quotes
            </a>
          </li>
        </ul>
      </nav>
    `);
  });
  
  test('test link click', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Quotes'));
  
    expect(screen.getByText('Quotes')).toMatchInlineSnapshot(`
      <a
        aria-current="page"
        class="active"
        href="/quote"
      >
        Quotes
      </a>
    `);
  });
})

describe('Testing Home Component',()=>{
  test('render homepage',()=>{
    render(
        <Home />  
  )
  expect(screen.getByText('Welcome to our page!')).toMatchInlineSnapshot(`
  <h3>
    Welcome to our page!
  </h3>
  `)
}
  )}
)

describe('Testing Calculator Component',()=>{
  test('render homepage',()=>{
    render(
        <Calculator />  
  )
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('4'));
  expect(screen.getByText('54')).toMatchInlineSnapshot(`
  <div
    class="input"
  >
    54
  </div>
  `)
}
  )}
)