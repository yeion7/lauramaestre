import React from 'react';
import Helmet from 'react-helmet';
import Laura from '../assets/images/laura1.jpg';

const FavIcon = ({ title, description, url, path, isPost, image, isAbout }) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: `${url}${path}`,
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
              '@id': `${url}${path}`,
              name: title,
              image: `${url.slice(0, -1)}${image}`,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: `${url}${path}`,
        name: title,
        alternateName: `Laura Maestre | ${url}`,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: `${url.slice(0, -1)}${image}`,
        },
        description,
      },
    ]);
  }

  if (isAbout) {
    schemaOrgJSONLD.push([
      {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Laura Maestre',
        url: `${url}${path}`,
        jobTitle: 'Renacedora en Bioreprogramación.',
        alumniOf: 'Organización Mundial de Terapia Regresiva Reconstructiva',
        gender: 'female',
        image: `${url.slice(0, -1)}${image}`,
        sameAs: ['https://www.facebook.com/terapeutalauramaestre/'],
      },
    ]);
  }

  return (
    <Helmet>
      {/* General tags */}
      <html lang="es" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={`${url.slice(0, -1)}${image}`} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={`${url}${path}`} />
      {isPost && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url.slice(0, -1)}${image}`} />
      <meta property="fb:app_id" content={204324066814610} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url.slice(0, -1)}${image}`} />
    </Helmet>
  );
};

export default FavIcon;
