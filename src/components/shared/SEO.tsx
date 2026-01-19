import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({ title, description, path = '' }: SEOProps) {
  const siteTitle = 'Muneeb Azfar Nafees - Portfolio';
  const siteDescription =
    'Engineering intelligent systems — from data to deployment. CS (AI) + Mathematical Science at Colby College.';
  const siteUrl = 'https://muneeb-ii.github.io';

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullDescription = description || siteDescription;
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
    </Helmet>
  );
}
