import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Target, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { solutionsData } from '../data/solutions';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Solusi Kebutuhan Bisnis | CV Lintas Informatika Buana"
        description="Solusi teknologi informasi yang dirancang berdasarkan permasalahan nyata organisasi: digitalisasi proses, modernisasi infrastruktur, dan kesiapan ISO."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Solusi Bisnis' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Pendekatan Berorientasi Kebutuhan
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08204C] tracking-tight">
            Solusi Berdasarkan Masalah & Kebutuhan Nyata
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Teknologi hanyalah sarana; tujuannya adalah efisiensi operasional, perlindungan aset data, dan percepatan pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-8 mb-16">
          {solutionsData.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs hover:border-slate-300 transition-all scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0069D2] mb-1">
                    <span>{sol.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-400">Solusi 0{index + 1}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#08204C]">
                    {sol.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    {sol.tagline}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  Konsultasikan Solusi Ini
                </Link>
              </div>

              {/* 2-Column Grid: Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Permasalahan Pelanggan:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {sol.clientChallenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F1F6FB] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#08204C]">
                    <Target className="w-4 h-4 text-[#0069D2] shrink-0" />
                    <span>Pendekatan Solusi LIB:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {sol.solutionApproach}
                  </p>
                </div>
              </div>

              {/* 2-Column Grid: Scope & Targeted Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Ruang Lingkup Pekerjaan:
                  </h4>
                  <ul className="space-y-2">
                    {sol.scopeOfWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#009696] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Hasil yang Dituju (Targeted Outcomes):
                  </h4>
                  <ul className="space-y-2">
                    {sol.targetedOutcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0069D2] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-[#08204C]">
            Menghadapi Tantangan TI Unik yang Belum Tercantum di Atas?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Tim analis kami terbiasa membedah kasus kebutuhan khusus melalui sesi penelaahan arsitektur dan kajian studi kelayakan independen.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
            >
              Diskusikan Kebutuhan Anda
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
