import React from 'react';
import Helmet from 'react-helmet';

const FavIcon = ({ title, description, url, isPost, image }) => {
  return (
    <Helmet>
      {/* General tags */}
      <html lang="es" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image || '/laura4.jpg'} />

      {/* Schema.org tags */}
      {/* <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script> */}

      {/* OpenGraph tags */}
      <meta property="og:locale" content="es_CO" />

      <meta property="og:url" content={url} />
      {isPost && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || lauraImage} />
      <meta property="fb:app_id" content={204324066814610} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || lauraImage} />
    </Helmet>
  );
};

export default FavIcon;
