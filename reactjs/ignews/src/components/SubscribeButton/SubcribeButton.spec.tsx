import { fireEvent, render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn()
  };
});

jest.mock('next/router');

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe now')).toBeInTheDocument;
  });

  it('rendirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirects tp posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter);

    const pushMocked = jest.fn();

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton);

    expect(pushMocked).toHaveBeenCalled();
  });
});
