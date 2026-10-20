import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle, 
  ChevronDown, 
  Layers, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/services';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title={`${service.title} | CV Lintas Informatika Buana`}
        description={service.shortDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Layanan Teknologi', path: '/services' },
            { label: service.title }
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/services"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0069D2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Daftar Layanan</span>
          </Link>
        </div>

        {/* 1. OVERVIEW HERO BANNER */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-8 shadow-xs">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#0069D2]">{service.category}</span>
              <span aria-hidden="true">·</span>
              <span>Layanan Spesifik LIB</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08204C] tracking-tight">
              {service.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-xs transition-colors"
              >
                Konsultasikan Kebutuhan Ini
              </Link>
              <a
                href="#scope"
                className="inline-flex items-center px-5 py-3 text-xs font-semibold text-slate-700 bg-[#F1F6FB] hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              >
                Lihat Ruang Lingkup Kerja
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* 2. BUSINESS CHALLENGES */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#08204C]">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <h2>Tantangan Bisnis yang Diselesaikan (Business Challenges)</h2>
              </div>
              <ul className="space-y-3">
                {service.businessChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. SCOPE OF SERVICES */}
            <div id="scope" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Ruang Lingkup Layanan (Scope of Services)
              </h2>
              <p className="text-xs text-slate-600">
                Pekerjaan yang kami lakukan disusun secara modular dan dapat disesuaikan dengan skala kompleksitas organisasi Anda:
              </p>
              <ul className="space-y-3 pt-2">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009696] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. ENGAGEMENT PROCESS */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#08204C]">
                  Tahapan Pelaksanaan (Engagement Process)
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Alur interaksi kerja profesional dari awal asesmen hingga serah terima hasil akhir.
                </p>
              </div>

              <div className="space-y-4">
                {service.engagementProcess.map((proc) => (
                  <div
                    key={proc.step}
                    className="p-4 rounded-xl bg-[#F1F6FB] border border-slate-200/80 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#0069D2] text-white flex items-center justify-center text-xs font-bold shrink-0 font-mono">
                      0{proc.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {proc.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {proc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. EXPECTED DELIVERABLES */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#08204C]">
                <FileCheck className="w-5 h-5 text-[#0069D2] shrink-0" />
                <h2>Hasil yang Diserahkan (Expected Deliverables)</h2>
              </div>
              <p className="text-xs text-slate-600">
                Keluaran resmi terdokumentasi yang diserahkan dan menjadi aset kepemilikan organisasi klien:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.expectedDeliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#F1F6FB] border border-slate-200 text-xs text-slate-800 font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B5CC] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. FREQUENTLY ASKED QUESTIONS */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <div className="divide-y divide-slate-100">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0069D2] py-1 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <p className="text-xs text-slate-600 leading-relaxed pt-2 pl-1">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: 7. CONSULTATION CTA & Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Consultation Action Box */}
            <div className="bg-gradient-to-br from-[#08204C] to-[#0069D2] text-white rounded-xl p-6 shadow-xs space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#00B5CC] font-semibold block">
                Konsultasi & Penjadwalan
              </span>
              <h3 className="text-lg font-bold">
                Jadwalkan Diskusi Kebutuhan Organisasi Anda
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Tim LIB siap mendengarkan latar belakang tantangan TI Anda, memberikan masukan awal, serta merancang proposal teknis yang sesuai.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-semibold text-[#08204C] bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </div>

            {/* Related Services in Category */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Layanan Terkait di Kategori Ini
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.id}`}
                      className="block p-3 rounded-lg bg-[#F1F6FB] hover:bg-slate-100 transition-colors group"
                    >
                      <strong className="text-xs text-slate-900 group-hover:text-[#0069D2] block">
                        {rel.title}
                      </strong>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {rel.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Advisory Scope Disclaimer */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
              <strong>Catatan Keterlibatan:</strong> Seluruh rekomendasi teknis dan tata kelola disesuaikan dengan konteks spesifik organisasi dan regulasi yang berlaku di Indonesia.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
