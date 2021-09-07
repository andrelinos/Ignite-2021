import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();

  await waitFor(() => (
    expect(screen.getByText('Maria')).toBeInTheDocument()
  ));

  await waitFor(() => (
    expect(screen.getByText('Juliana')).toBeInTheDocument()
  ));
});
