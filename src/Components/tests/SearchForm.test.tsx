import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from '../SearchForm';

test('renders select dropdown and button', () => {
  render(<SearchForm onData={jest.fn()} />);
  expect(screen.getByLabelText(/Select Artist/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Search ArtWorks/i })).toBeInTheDocument();
});

test('calls onData when Search button is clicked', async () => {
  const mockHandler = jest.fn();
  render(<SearchForm onData={mockHandler} />);

  const button = screen.getByText(/Search ArtWorks/i);
  fireEvent.click(button);

  
});
