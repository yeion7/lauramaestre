import React from 'react';
import Helmet from 'react-helmet';
import Laura from '../assets/images/laura1.jpg';

const FavIcon = ({ title, description, url, isPost, image }) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: url,
      name: title,
      alternateName: description,
    },
  ];
  if (isPost) {
    schemaOrgJSONLD.push([
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: url,
        name: title,
        alternateName: `Laura Maestre | ${url}`,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      },
    ]);
  }

  return (
    <Helmet>
      {/* General tags */}
      <html lang="es" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image || '/laura4.jpg'} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:locale" content="es_CO" />

      <meta property="og:url" content={url} />
      {isPost && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || Laura} />
      <meta property="fb:app_id" content={204324066814610} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || '/laura4.jpg'} />
    </Helmet>
  );
};

export default FavIcon;
