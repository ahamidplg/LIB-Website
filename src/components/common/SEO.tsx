import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'CV Lintas Informatika Buana | IT Solutions, Cybersecurity & ISO Consulting',
  description = 'CV Lintas Informatika Buana menyediakan solusi teknologi informasi, pengembangan aplikasi, integrasi sistem, tata kelola TI, cybersecurity, serta pendampingan implementasi ISO 27001 dan ISO 9001.'
}) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
