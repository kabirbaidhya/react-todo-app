import { render, screen } from '@testing-library/react';
import App from './App';

test('renders things to do', () => {
  render(<App />);
  const linkElement = screen.getByText(/things to do/i);
  expect(linkElement).toBeInTheDocument();
});
