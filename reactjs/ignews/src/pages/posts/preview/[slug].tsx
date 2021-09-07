import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { useEffect } from 'react';

import { Footer } from '../../../components/Footer';
import { getPrismicClient } from '../../../services/prismic';
import styles from '../post.module.scss';

type PostProps = {
  slug: string;
  title: string;
  banner?: string;
  content: string;
  updatedAt: string;
}

type PostPreviewProps = {
  post: PostProps;
};

export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <img src={post.banner} alt={post.title} />
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            <span>Wanna continue reading?</span>
            <Link href="/">
              <>
                <a href="/">Subscribe now</a> 🤗
              </>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    banner: response.data.banner.url,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 1)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-br',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
