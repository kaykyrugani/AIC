import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  image, 
  article = false,
  path = ''
}) => {
  const siteUrl = 'https://ccsadvogados.com.br';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const siteName = 'CCS Advogados';
  const twitterHandle = '@ccsadvogados';

  const seo = {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || 'Consultoria estratégica em propriedade intelectual, concorrência e consumo.',
    image: image || defaultImage,
    url: fullUrl,
  };

  return (
    <Helmet
      title={seo.title}
      meta={[
        // Basic SEO
        { name: 'description', content: seo.description },
        { name: 'image', content: seo.image },
        
        // Open Graph / Facebook
        { property: 'og:type', content: article ? 'article' : 'website' },
        { property: 'og:url', content: seo.url },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:image', content: seo.image },
        { property: 'og:site_name', content: siteName },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: twitterHandle },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: seo.image },
        
        // Additional
        { name: 'robots', content: 'index, follow' },
      ]}
      link={[
        { rel: 'canonical', href: seo.url },
      ]}
    >
      <html lang="pt-br" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  path: PropTypes.string,
};

export default SEO;
