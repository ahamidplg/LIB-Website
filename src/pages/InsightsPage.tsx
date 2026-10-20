import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Calendar, 
  User 
} from 'lucide-react';
import { articlesData, articleNotice } from '../data/articles';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Cybersecurity',
    'ISO 27001',
    'ISO 9001',
    'IT Governance',
    'Software & Digital Transformation',
    'IT Infrastructure'
  ];

  const filteredArticles = articlesData.filter((art) => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Artikel & Wawasan Teknologi | CV Lintas Informatika Buana"
        description="Artikel edukatif seputar cybersecurity, tata kelola TI, sistem manajemen mutu ISO 9001, dan keamanan informasi ISO 27001."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Artikel & Wawasan' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Pusat Pengetahuan & Literasi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Artikel, Wawasan & Praktik Terbaik
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Kumpulan artikel dan panduan konseptual mengenai strategi implementasi teknologi, penguatan postur keamanan siber, dan standar tata kelola manajemen.
          </p>
        </div>

        {/* Notice Banner */}
        <div className="mb-10 p-5 bg-blue-50/80 rounded-2xl border border-blue-200/80 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-[#0069D2] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#08204C] block mb-1">{articleNotice.label}:</strong>
            {articleNotice.description}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-lg max-w-full overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedCat === cat
                      ? 'bg-white text-[#08204C] shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'Semua Topik' : cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F1F6FB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] text-slate-800"
              />
            </div>

          </div>

          <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span>Menampilkan {filteredArticles.length} artikel</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[#0069D2] hover:underline"
              >
                Hapus pencarian
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between hover:shadow-xs transition-all group"
            >
              <div className="space-y-3">
                
                {/* Zero-Pill Unboxed Metadata with · separator */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#0069D2]">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-[#08204C] group-hover:text-[#0069D2] transition-colors leading-snug">
                  <Link to={`/insights/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>

                <div className="pt-3 text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-100">
                  <span>{art.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.author}</span>
                </div>

              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  to={`/insights/${art.slug}`}
                  className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
