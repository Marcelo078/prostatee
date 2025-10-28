import { useEffect } from "react";

export const SEOHead = () => {
  useEffect(() => {
    // Update meta tags
    document.title = "ProstaVive Review 2025 - Natural Prostate Health Support | Official";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "ProstaVive is an advanced natural supplement supporting healthy prostate size & function for men 40+. Learn about benefits, ingredients, and where to buy."
      );
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "ProstaVive - Supports Healthy Prostate Size & Function");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Natural prostate health supplement with saw palmetto, cordyceps & panax ginseng. FDA-approved facility. Support your prostate health naturally."
      );
    }

    // Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    }

    // Add JSON-LD structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "ProstaVive",
      "description": "Advanced formula supplement that supports healthy prostate size and function with natural ingredients including saw palmetto, cordyceps, and panax ginseng.",
      "category": "Health & Fitness / Men's Health",
      "brand": {
        "@type": "Brand",
        "name": "ProstaVive"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://ea3fdchmz1lhpleguk64879r1b.hop.clickbank.net",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "1240"
      }
    });
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};
