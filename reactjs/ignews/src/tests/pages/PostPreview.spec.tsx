import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';

import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import { getPrismicClient } from '../../services/prismic';

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post content</p>',
  updatedAt: '10 de Julho'
};

jest.mock('next-auth/client');
jest.mock('../../services/prismic');

describe('Posts preview page', () => {
  it('render currectly', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<Post post={post} />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument();
  });

  // it('redirects user if no subscription is found', async () => {
  //   const getSessionMocked = mocked(getSession);

  //   getSessionMocked.mockResolvedValueOnce({
  //     activeSubscription: null
  //   } as any);

  //   const response = await getServerSideProps({
  //     req: {
  //       cookies: {}
  //     },
  //     params: { slug: 'my-new-post' }
  //   } as any);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       redirect: expect.objectContaining({
  //         destination: '/'
  //       })
  //     })
  //   );
  // });
  // it('loads initial data', async () => {
  //   const getSessionMocked = mocked(getSession);

  //   const getPrismicClientMocked = mocked(getPrismicClient);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //     getByUID: jest.fn().mockResolvedValueOnce({
  //       data: {
  //         title: [{ type: 'heading', text: 'My New Post' }],
  //         content: [{ type: 'paragraph', text: 'Post content' }]
  //       },
  //       last_publication_date: '07-10-2021'
  //     })
  //   } as any);

  //   getSessionMocked.mockResolvedValueOnce({
  //     activeSubscription: 'fake-active-subscription'
  //   });

  //   const response = await getServerSideProps({
  //     req: {
  //       cookies: {}
  //     },
  //     params: { slug: 'my-new-post' }
  //   } as any);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         post: {
  //           slug: 'my-new-post',
  //           title: 'My New Post',
  //           content: '<p>Post content</p>',
  //           updatedAt: '10 de julho de 2021'
  //         }
  //       }
  //     })
  //   );
  // });
});
