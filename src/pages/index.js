import React from 'react';
import IntroPage from '../components/Pages/IntroPage';
import Layout from '../components/layout';

const index = () => (
    <Layout>
        <IntroPage/>
    </Layout>
);
export default index

export const Head = () => (
  <>
    <title>Meyer Taffel - Developer | B.S Physics</title>
    <meta name="description" content="Hello World" />
    <link rel="icon" type="image/png" href="../images/favicon.png" />
  </>
)
