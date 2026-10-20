import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { 
  governanceFrameworkStages, 
  governanceAdvisoryTopics, 
  referenceFrameworks 
} from '../data/governance';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const CybersecurityGovernancePage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Cybersecurity & IT Governance | CV Lintas Informatika Buana"
        description="Kerangka kerja tata kelola TI, manajemen risiko siber, kepatuhan regulasi, dan perbaikan berkelanjutan berbasis standar industri."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Cybersecurity & IT Governance' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Kerangka Strategis Keamanan & Tata Kelola
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08204C] tracking-tight leading-tight">
            Cybersecurity & IT Governance Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Menghubungkan kepemimpinan strategis, manajemen risiko, implementasi kontrol teknis, serta evaluasi kepatuhan untuk melindungi kelangsungan operasional organisasi secara terukur.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-xs transition-colors"
            >
              Konsultasi Tata Kelola & Keamanan
            </Link>
            <a
              href="#siklus-governance"
              className="inline-flex items-center px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors"
            >
              Lihat Siklus Tata Kelola
            </a>
          </div>
        </div>

        {/* 1. VISUAL GOVERNANCE CYCLE DIAGRAM */}
        <section id="siklus-governance" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-14 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2 block">
              Alur Siklus Berkesinambungan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08204C]">
              Governance to Continual Improvement Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pendekatan siklikal yang memastikan postur keamanan adaptif terhadap dinamika ancaman baru.
            </p>
          </div>

          {/* Simple Clean Visual Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {governanceFrameworkStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="p-5 rounded-xl bg-[#F1F6FB] border border-slate-200 flex flex-col justify-between relative group hover:border-[#0069D2] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-md bg-[#0069D2] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {stage.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      FASE {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#08204C] mb-1">
                    {stage.phase}
                  </h3>
                  <p className="text-xs font-medium text-[#0069D2] mb-2">
                    {stage.title}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
                  <p className="font-semibold text-slate-700">Aktivitas Inti:</p>
                  {stage.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[#009696] font-bold">·</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 text-[#0069D2]" />
            <span>Siklus berulang secara periodik melalui evaluasi berkala dan tinjauan manajemen.</span>
          </div>
        </section>

        {/* 2. ADVISORY TOPICS GRID */}
        <section className="mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
              Fokus Konsultasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
              Topik & Ruang Lingkup Pendampingan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Konsultasi mendalam mencakup seluruh pilar tata kelola, manajemen risiko, dan kesiapan pemenuhan standar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceAdvisoryTopics.map((top) => (
              <div
                key={top.title}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 shadow-xs flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-[#08204C]">
                    {top.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {top.desc}
                  </p>
                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">Poin Utama:</p>
                    <ul className="space-y-1">
                      {top.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-[#009696] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1"
                  >
                    <span>Konsultasikan Topik Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. REFERENCE FRAMEWORKS & INTEGRITY STATEMENT */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-12 shadow-xs space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
              Standar Acuan Konsultasi
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08204C]">
              Framework Internasional yang Digunakan sebagai Acuan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Dalam memberikan rekomendasi arsitektur dan tata kelola keamanan, LIB mengacu pada praktik terbaik global berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {referenceFrameworks.map((fw) => (
              <div key={fw.name} className="p-5 rounded-xl bg-[#F1F6FB] border border-slate-200 text-xs space-y-3">
                <strong className="text-sm font-bold text-[#08204C] block">
                  {fw.name}
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  {fw.description}
                </p>
                <div className="pt-2 border-t border-slate-200 text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Penerapan dalam Konsultasi:</span>
                  {fw.role}
                </div>
              </div>
            ))}
          </div>

          {/* Strict Integrity Notice */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-800">Pernyataan Transparansi Hak Cipta & Akreditasi:</strong> Standar dan framework seperti ISO/IEC 27001 (International Organization for Standardization), NIST CSF (National Institute of Standards and Technology), dan CIS Controls adalah merek dagang dan hak cipta dari masing-masing organisasi penerbit. CV Lintas Informatika Buana menggunakan dokumen-dokumen tersebut sebagai referensi teknis metodologi konsultasi, dan tidak menyatakan diri sebagai pemilik standar, agen resmi terafiliasi, atau perwakilan tunggal dari badan-badan tersebut.
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-[#08204C]">
            Tingkatkan Maturitas Tata Kelola TI & Keamanan Organisasi Anda
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Diskusikan langkah asesmen awal dan penyusunan roadmap peningkatan postur keamanan bersama tim penasihat LIB.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
            >
              Hubungi Tim Konsultan
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
