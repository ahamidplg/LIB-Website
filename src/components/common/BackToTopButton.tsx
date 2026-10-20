import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-6 z-40 p-3 bg-[#08204C] hover:bg-[#0069D2] text-white rounded-full shadow-lg border border-slate-700 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0069D2]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
