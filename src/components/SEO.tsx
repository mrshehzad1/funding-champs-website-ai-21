
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Champion Worldwide | Business Funding Solutions - Get Qualified Today",
  description = "Champion Worldwide offers tailored business funding solutions for startups and established businesses. $250M+ funded. Fast approvals, competitive rates. Apply for funding today!",
  keywords = "business funding, small business loans, startup funding, SBA loans, equipment financing, lines of credit, commercial financing, business capital",
  canonicalUrl,
  ogImage = "https://championworldwide.com/lovable-uploads/7a6cf759-f305-440a-a2e0-6533d626603b.png",
  noindex = false
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
    </Helmet>
  );
};

export default SEO;
