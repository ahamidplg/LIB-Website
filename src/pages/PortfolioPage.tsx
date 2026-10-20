import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HelpCircle, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { portfolioItems, portfolioNotice } from '../data/portfolio';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Portofolio Konseptual | CV Lintas Informatika Buana"
        description="Studi kasus konseptual pendekatan implementasi sistem informasi, kesiapan ISO, dan modernisasi infrastruktur dari CV Lintas Informatika Buana."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Portofolio' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Studi Kasus & Metodologi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Portofolio & Konsep Implementasi
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Menampilkan kerangka studi kasus yang menggambarkan bagaimana tim LIB membedah masalah bisnis, merancang ruang lingkup, dan mengeksekusi solusi teknologi.
          </p>
        </div>

        {/* Transparency Disclaimer Banner */}
        <div className="mb-10 p-5 bg-amber-50/80 rounded-2xl border border-amber-200/90 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-950 block mb-1">{portfolioNotice.label}:</strong>
            {portfolioNotice.explanation}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 sm:p-8 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#0069D2]">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-mono">
                    Konsep 0{idx + 1}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#08204C] group-hover:text-[#0069D2] transition-colors leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.projectOverview}
                </p>

                {/* Challenge & Outcome Preview */}
                <div className="space-y-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#F1F6FB] border border-slate-200/70">
                    <strong className="text-slate-800 block mb-1">Tantangan Bisnis:</strong>
                    <p className="text-slate-600 line-clamp-2">{item.businessChallenge}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-200/60">
                    <strong className="text-emerald-900 block mb-1">Hasil yang Dituju:</strong>
                    <p className="text-emerald-800 line-clamp-2">{item.outcome}</p>
                  </div>
                </div>

                {/* Technology list */}
                <div className="pt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-1">Framework / Teknologi Terkait:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologyUsed.map((tech, i) => (
                      <span key={i} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/portfolio/${item.id}`}
                  className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Lihat Seluruh Detail Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#0069D2] rounded-md transition-colors"
                >
                  Minta Studi Serupa
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Project Inquiry Callout */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-[#08204C]">
            Ingin Membahas Rencana Proyek Organisasi Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Sampaikan deskripsi tantangan atau dokumen Kerangka Acuan Kerja (KAK) Anda kepada tim LIB untuk penyusunan proposal teknis.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
            >
              Hubungi Tim LIB
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
