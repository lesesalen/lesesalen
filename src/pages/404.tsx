import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useSiteMetadata } from "../queries/useSiteMetadata";

interface Props {
  location: Record<string, string>;
}

const NotFoundPage: React.FC<Props> = ({ location }) => {
  const siteTitle = useSiteMetadata().title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
