import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '../components/Nav';

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
