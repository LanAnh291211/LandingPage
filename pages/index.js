import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import AboutPage from '../components/about/about';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Landing Page</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
    
       <AboutPage />

    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
