import { render, screen } from '@testing-library/react';
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      };
    }
  };
});

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false];
    }
  };
});

describe('ActiveLink component', () => {
  it('render correctly', () => {
    render(<Header />);


    //screen.logTestingPlaygroundURL();

    expect(screen.getByText('Home')).toBeInTheDocument;
    expect(screen.getByText('Posts')).toBeInTheDocument;
  });
});
