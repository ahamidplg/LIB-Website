import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  Workflow, 
  AlertTriangle 
} from 'lucide-react';
import { isoHeroData, isoServices, isoConsultingStages } from '../data/iso';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ISOConsultingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'iso-27001' | 'iso-9001'>('iso-27001');

  const currentService = isoServices.find((s) => s.id === activeTab) || isoServices[0];

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="ISO Consulting (ISO 27001 & ISO 9001) | CV Lintas Informatika Buana"
        description="Pendampingan implementasi ISO 27001 (Keamanan Informasi) dan ISO 9001 (Mutu) terstruktur, berbasis kebutuhan organisasi, dan berorientasi pada perbaikan berkelanjutan."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'ISO Consulting' }]} />

        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Layanan Konsultasi & Pendampingan Sistem Manajemen
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08204C] tracking-tight leading-tight">
            {isoHeroData.headline}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
            {isoHeroData.subheadline}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-xs transition-colors"
            >
              Jadwalkan Konsultasi ISO
            </Link>
            <a
              href="#tahapan-konsultasi"
              className="inline-flex items-center px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors"
            >
              Pelajari 7 Tahap Konsultasi
            </a>
          </div>
        </div>

        {/* Mandatory Independence Disclaimer Box */}
        <div className="mb-12 p-5 bg-amber-50/80 rounded-2xl border border-amber-200/90 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-950 block">Pernyataan Independensi & Integritas Konsultasi:</strong>
            <p>{isoHeroData.disclaimer}</p>
          </div>
        </div>

        {/* Standard Selector Tabs (Buttons per zero-pill discipline) */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('iso-27001')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'iso-27001'
                ? 'bg-white text-[#08204C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ISO/IEC 27001 (Keamanan Informasi)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('iso-9001')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'iso-9001'
                ? 'bg-white text-[#08204C] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ISO 9001 (Sistem Manajemen Mutu)
          </button>
        </div>

        {/* Selected ISO Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-16 shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#00B5CC]" />
              <span>Standar Internasional Terdaftar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08204C]">
              {currentService.standard} — {currentService.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
              {currentService.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-4xl">
              {currentService.description}
            </p>
          </div>

          {/* Scope of Assistance Full Breakdown */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-[#08204C] mb-4">
              Ruang Lingkup Pendampingan yang Disediakan (Scope of Assistance):
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentService.scopeOfAssistance.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F1F6FB] border border-slate-200/80 flex items-start gap-3 text-xs text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#009696] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Output Documents */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-[#08204C] mb-4">
              Dokumen & Rekam Bukti yang Dihasilkan (Deliverables):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentService.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
                >
                  <FileCheck className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <span className="font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Implementasi disesuaikan dengan ruang lingkup organisasi, edisi standar mutakhir, dan komitmen operasional Anda.
            </div>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
            >
              Minta Proposal Pendampingan {currentService.standard}
            </Link>
          </div>
        </div>

        {/* 7 CONSULTING STAGES (TAHAPAN KONSULTASI) */}
        <div id="tahapan-konsultasi" className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
              Metodologi Pendampingan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
              Tujuh Tahapan Konsultasi Implementasi ISO
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Proses terstruktur yang memandu organisasi mulai dari pemetaan awal hingga kesiapan penuh menghadapi audit sertifikasi eksternal.
            </p>
          </div>

          <div className="space-y-4">
            {isoConsultingStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[#08204C] text-white flex items-center justify-center text-sm font-bold font-mono shrink-0">
                    0{stage.step}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#08204C]">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-3xl">
                      {stage.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono shrink-0 sm:text-right">
                  Tahap {stage.step} dari 7
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Box */}
        <div className="bg-gradient-to-r from-[#08204C] to-[#0069D2] text-white rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ingin Mengetahui Kesiapan Organisasi Anda terhadap Standar ISO?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Hubungi tim konsultan LIB untuk sesi diskusi awal mengenai lingkup usaha dan estimasi tahapan gap assessment.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold text-[#08204C] bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Konsultasi Sekarang
          </Link>
        </div>

      </div>
    </div>
  );
};
