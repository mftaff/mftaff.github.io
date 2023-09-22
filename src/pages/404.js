import React from 'react'
import CardPage from "../components/Common/CardPage";
import Layout from '../components/layout';

const NotFoundPage = () =>
    <Layout>
        <CardPage
            // imgLink={"https://upload.wikimedia.org/wikipedia/commons/0/0d/Tumbeasts_sign1.png"}
            text={"Well that didn't work out quite how we planned it..."}
        />
    </Layout>;

export default NotFoundPage
