import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Header from './components/Header';

test('renders App', () => {
  render(<App />);
});

describe('Header', () => {
  test('links points to the correct page', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const searchLink = screen.getByRole('link', { name: /search/i });
    const hiwLink = screen.getByRole('link', { name: /how it works/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(searchLink);
    userEvent.click(hiwLink);
    userEvent.click(aboutLink);
  });
});
