import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();

  await waitFor(() => {
    return (
      expect(screen.getByText('Maria')).toBeInTheDocument()
      // expect(screen.queryByText('Juliana')).toBeInTheDocument()
    );
  });

});
