import { Helmet } from "react-helmet";

const SeoLogo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://mathius.com.ar",
    "logo": "https://mathius.com.ar/logo2.png"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SeoLogo;
