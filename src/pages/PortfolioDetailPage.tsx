import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle, 
  Cpu, 
  Layers, 
  Target 
} from 'lucide-react';
import { portfolioItems, portfolioNotice } from '../data/portfolio';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title={`${item.title} | Portofolio CV Lintas Informatika Buana`}
        description={item.projectOverview}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Portofolio', path: '/portfolio' },
            { label: item.title }
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0069D2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Portofolio</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-8 shadow-xs">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#0069D2]">{item.category}</span>
              <span aria-hidden="true">·</span>
              <span>{portfolioNotice.label}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08204C] tracking-tight">
              {item.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {item.projectOverview}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Teknologi / Framework:</span>
              {item.technologyUsed.map((tech, i) => (
                <span key={i} className="bg-[#F1F6FB] border border-slate-200 px-2.5 py-0.5 rounded text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Challenge */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#08204C]">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <h2>Tantangan Bisnis (Business Challenge)</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.businessChallenge}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Ruang Lingkup Pekerjaan (Scope of Work)
              </h2>
              <ul className="space-y-3">
                {item.scopeOfWork.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009696] shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                <Target className="w-5 h-5 text-emerald-600 shrink-0" />
                <h2>Hasil yang Dicapai / Dituju (Outcome)</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                {item.outcome}
              </p>
            </div>

          </div>

          {/* Right Column: Inquiries */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Conceptual Notice Box */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pemberitahuan Kerahasiaan Klien</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Demi menjaga kerahasiaan hak kepemilikan data (NDA) dan kepatuhan informasi, studi kasus ini disajikan dalam format metodologi konseptual terbuka.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-gradient-to-br from-[#08204C] to-[#0069D2] text-white rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold">
                Memiliki Kebutuhan Serupa?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Tim spesialis LIB siap menganalisis dokumen rancangan kerja dan mengajukan proposal pendampingan atau rekayasa sistem yang tepat sasaran.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#08204C] bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                Konsultasikan Proyek Anda
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
