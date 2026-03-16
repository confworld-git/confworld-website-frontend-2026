import React from "react";
import { Helmet } from "react-helmet-async";

export const Seo = ({ title, description, canonical, schema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

// export default SEO;
