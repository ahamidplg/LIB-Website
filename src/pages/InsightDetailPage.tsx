import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  HelpCircle, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  ArrowRight, 
  FileText 
} from 'lucide-react';
import { articlesData, articleNotice } from '../data/articles';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = articlesData
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title={`${article.title} | CV Lintas Informatika Buana`}
        description={article.excerpt}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Artikel & Wawasan', path: '/insights' },
            { label: article.title }
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/insights"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0069D2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Daftar Artikel</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 shadow-xs mb-12">
          
          {/* Header Metadata (Zero-Pill Discipline) */}
          <header className="space-y-4 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#0069D2]">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>Oleh {article.author}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08204C] tracking-tight leading-snug">
              {article.title}
            </h1>

            <p className="text-base text-slate-600 italic leading-relaxed pt-2">
              &ldquo;{article.excerpt}&rdquo;
            </p>
          </header>

          {/* Sample Label Notice */}
          <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
            <div>
              <strong>Pemberitahuan Materi Publikasi:</strong> Artikel ini disajikan sebagai contoh materi edukasi konseptual seputar praktik terbaik arsitektur sistem dan tata kelola teknologi.
            </div>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-6 pt-4">
            {article.content.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Author Box & Share */}
          <footer className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              Ditulis oleh: <strong className="text-slate-900">{article.author}</strong> — Divisi Penasihat Teknologi LIB
            </div>
            <Link
              to="/contact"
              className="px-4 py-2 bg-[#F1F6FB] hover:bg-slate-100 rounded-md text-slate-800 font-medium border border-slate-200 transition-colors"
            >
              Diskusikan Topik Artikel Ini
            </Link>
          </footer>

        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-base font-bold text-[#08204C] mb-6">
              Artikel Terkait dalam Kategori {article.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xs transition-shadow"
                >
                  <div className="space-y-2">
                    <span className="text-xs text-slate-500">{rel.readTime}</span>
                    <h4 className="text-sm font-bold text-[#08204C]">
                      <Link to={`/insights/${rel.slug}`} className="hover:text-[#0069D2]">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-2">
                    <Link
                      to={`/insights/${rel.slug}`}
                      className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1"
                    >
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
