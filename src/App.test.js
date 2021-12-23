import { render, screen } from '@testing-library/react';
import App from './App';

test('renders things to do', () => {
  render(<App />);
  const element = screen.getByText(/things to do/i);
  expect(element).toBeInTheDocument();
});
