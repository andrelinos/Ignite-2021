import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';

import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  const useSessionMocked = mocked(useSession);

  it('render correctly when user is not autheticated', () => {
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument;
  });

  it('render correctly when user is autheticated', () => {
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'John Doe', email: 'john.doe@example.com' },
        expires: 'fake-expires',
      },
      false,
    ]);

    render(<SignInButton />);

    // screen.logTestingPlaygroundURL();

    expect(screen.getByText('John Doe')).toBeInTheDocument;
  });
});
