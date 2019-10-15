import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Nav from "../components/nav";

const Slider = dynamic(() => import("../components/slider"), {
  ssr: false,
  loading: () => <p>Slider is loading...</p>,
});

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Slider />

    <style jsx>{`
      div {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
    `}</style>
  </>
);

export default Home;
