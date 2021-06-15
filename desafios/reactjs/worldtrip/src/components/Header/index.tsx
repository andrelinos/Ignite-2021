import { useRouter } from 'next/router';

import { Logo } from './Logo';
import { Banner } from './Banner';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <>
      <Logo />
      {!notHomePage && (
      <Banner />
      )}
    </>
  );
}
