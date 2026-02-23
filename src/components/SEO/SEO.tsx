import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterHandle,
  canonical,
}: SEOProps) => {
  const siteTitle = "Nails Master"; // Default site title
  const defaultDescription = "Professional nail care and beauty services for your perfect look.";
  const baseUrl = window.location.origin;

  const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || window.location.href} />
      <meta property="og:title" content={ogTitle || currentTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || window.location.href} />
      <meta property="twitter:title" content={ogTitle || currentTitle} />
      <meta property="twitter:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta property="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`} />}
    </Helmet>
  );
};

export default SEO;
