import React from 'react';
import Helmet from 'react-helmet';

const FavIcon = ({ type }) => {
  const colors = {
    purple: '#93278F',
    blue: '#007EC0',
    orange: '#FF811F',
    yellow: '#FFD41F',
    all: '#00C28D',
  };
  return (
    <Helmet>
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={`/${type}-apple-touch-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={`/${type}-apple-touch-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={`/${type}-apple-touch-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={`/${type}-apple-touch-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href={`/${type}-apple-touch-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={`/${type}-apple-touch-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href={`/${type}-apple-touch-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={`/${type}-apple-touch-icon-152x152.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`/${type}-favicon-196x196.png`}
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/${type}-favicon-96x96.png`}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/${type}-favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/${type}-favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/${type}-favicon-128.png`}
        sizes="128x128"
      />
      <meta name="application-name" content="Laura Maestre" />
      <meta name="msapplication-TileColor" content={colors[type]} />
      <meta
        name="msapplication-TileImage"
        content={`/${type}-mstile-144x144.png`}
      />
      <meta
        name="msapplication-square70x70logo"
        content={`/${type}-mstile-70x70.png`}
      />
      <meta
        name="msapplication-square150x150logo"
        content={`/${type}-mstile-150x150.png`}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={`/${type}-mstile-310x150.png`}
      />
      <meta
        name="msapplication-square310x310logo"
        content={`/${type}-mstile-310x310.png`}
      />
    </Helmet>
  );
};

export default FavIcon;
