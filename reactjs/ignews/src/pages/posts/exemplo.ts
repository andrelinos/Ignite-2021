import React from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { default as NextLink } from 'next/link'
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'utils/queries'

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { postStyles } from "styles";
import { hrefResolver, linkResolver } from 'prismic-configuration'



// {prevpost !== 'undefined'
//   ? (
//     <NextLink as={linkResolver(prevpost)} href={hrefResolver(prevpost)}>
//       <a>Previous Post</a>
//     </NextLink>
//   )
// : null}
// {nextpost !== 'undefined'
//   ? (
//     <NextLink as={linkResolver(nextpost)} href={hrefResolver(nextpost)}>
//       <a>Next Post</a>
//     </NextLink>
//   )
// : null}
// https://community.prismic.io/t/nextjs-static-blog-with-pagination-using-prismic/698/12


/**
 * Post page component
 */
const Post = ({ post, prevpost, nextpost }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="main">
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={post.data.body} />
          {prevpost !== 'undefined'
            ? (
              <NextLink as={linkResolver(prevpost)} href={hrefResolver(prevpost)}>
                <a>Previous Post</a>
              </NextLink>
            )
          : null}
          {nextpost !== 'undefined'
            ? (
              <NextLink as={linkResolver(nextpost)} href={hrefResolver(nextpost)}>
                <a>Next Post</a>
              </NextLink>
            )
          : null}
        </div>
        <style jsx global>
          {postStyles}
        </style>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const client = Client()
  const post = await client.getByUID("post", params.uid, ref ? { ref } : null) || {}
  const prevpost = (await client.query(Prismic.Predicates.at('document.type', 'post'), { pageSize : 1 , after : `${post.id}`, orderings: '[my.post.date desc]'})).results[0] || 'undefined'
  const nextpost = (await client.query(Prismic.Predicates.at('document.type', 'post'), { pageSize : 1 , after : `${post.id}`, orderings: '[my.post.date]'})).results[0] || 'undefined'
  return {
    props: {
      preview,
      post,
      prevpost,
      nextpost
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
