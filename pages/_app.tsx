import Head from "next/head";

import "../styles/globals.scss";
import Layout from "../components/layout/layout";
import Image from "next/image";
import React from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <div className="image-and-div-stack">
      <img
        className="bg-co"
        src="/images/site/bg-header.png"
        alt="An image showing"
      />
      ;
      <div className="overlay-div">
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
