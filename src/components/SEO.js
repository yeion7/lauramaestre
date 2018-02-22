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
      <meta property="og:image" content={image || '/laura4.jpg'} />
      <meta property="fb:app_id" content={204324066814610} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || '/laura4.jpg'} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.fbAsyncInit = function() {
         FB.init({
           appId      : '204324066814610',
           xfbml      : true,
           version    : 'v2.12'
         });
         FB.AppEvents.logPageView();};
         (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
      `,
        }}
      />
    </Helmet>
  );
};

export default FavIcon;
