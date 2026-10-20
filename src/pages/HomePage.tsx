import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Server, 
  Cpu, 
  CheckCircle2, 
  FileCheck,
  Building2,
  Workflow,
  Sparkles
} from 'lucide-react';
import { businessPillars, companyData } from '../data/company';
import { isoServices } from '../data/iso';
import { solutionsData } from '../data/solutions';
import { TechVisualGlobe } from '../components/common/TechVisualGlobe';
import { SEO } from '../components/common/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] text-slate-900">
      <SEO
        title="CV Lintas Informatika Buana | IT Solutions, Cybersecurity & ISO Consulting"
        description="Partner teknologi Anda untuk solusi IT, integrasi sistem, tata kelola TI, keamanan informasi, dan pendampingan implementasi standar ISO 27001 & ISO 9001."
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F1F6FB] pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Subheadline & Primary Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Tagline Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0069D2]">
                <Sparkles className="w-4 h-4 text-[#00B5CC]" />
                <span>Melangkah Bersama, Membangun Masa Depan</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08204C] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Technology Solutions for a Smarter, Safer Business.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Partner teknologi Anda untuk solusi IT, integrasi sistem, tata kelola TI, keamanan informasi, dan pendampingan implementasi standar ISO.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-sm transition-colors text-center whitespace-nowrap shrink-0"
                >
                  <span>Konsultasi Sekarang</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors text-center whitespace-nowrap shrink-0"
                >
                  Jelajahi Layanan
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#009696]" />
                  NIB: {companyData.nib}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Palembang, Sumatera Selatan</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Tata Kelola, Keamanan & Rekayasa TI</span>
              </div>
            </div>

            {/* Right Column: Visual Tech Connectivity Globe */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[460px] aspect-square rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm flex items-center justify-center">
                <TechVisualGlobe className="w-full h-full" />
                <div className="absolute bottom-3 right-3 text-[11px] text-slate-400 bg-white/90 px-2 py-0.5 rounded border border-slate-100">
                  CV Lintas Informatika Buana
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUR BUSINESS PILLARS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2">
              Fondasi Kompetensi
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
              Empat Pilar Bisnis Lintas Informatika Buana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPillars.map((pillar, idx) => {
              const icons = [
                <Cpu className="w-6 h-6 text-[#0069D2]" key={0} />,
                <Layers className="w-6 h-6 text-[#009696]" key={1} />,
                <ShieldCheck className="w-6 h-6 text-[#08204C]" key={2} />,
                <FileCheck className="w-6 h-6 text-[#00B5CC]" key={3} />
              ];
              return (
                <div
                  key={pillar.id}
                  className="bg-[#F1F6FB]/80 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {icons[idx]}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0069D2] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-slate-200/60">
                    <Link
                      to={pillar.link}
                      className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Pelajari Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPANY BRIEF & VALUE PROPOSITION */}
      <section className="py-16 bg-[#F1F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <img
                  src="/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png"
                  alt="LIB Corporate Identity"
                  className="w-full h-auto object-contain max-h-56 p-4"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                  <p><strong className="text-slate-900">Entitas Usaha:</strong> {companyData.legalName}</p>
                  <p><strong className="text-slate-900">Domisili Hukum:</strong> {companyData.address.city}, {companyData.address.province}</p>
                  <p><strong className="text-slate-900">Nomor Induk Berusaha:</strong> {companyData.nib}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider">
                Profil Singkat Perusahaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
                Mitra Strategis Transformasi Digital, Tata Kelola & Keamanan Informasi
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                CV Lintas Informatika Buana (LIB) didirikan dengan visi menjadi mitra teknologi yang tepercaya dalam mendukung transformasi digital, tata kelola TI, dan penguatan keamanan informasi organisasi. Kami membantu korporasi, institusi pemerintah, serta pelaku usaha merancang arsitektur sistem informasi yang kokoh, patuh regulasi, dan siap berkembang.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Pendekatan Terstruktur</h4>
                  <p className="text-xs text-slate-600">
                    Setiap inisiatif dirancang dengan tahapan analisis gap objektif, dokumentasi baku, dan evaluasi hasil.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Berorientasi Nilai Nyata</h4>
                  <p className="text-xs text-slate-600">
                    Fokus pada efisiensi operasional dan perlindungan aset data, bukan sekadar membeli perangkat lunak.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-semibold text-[#0069D2] hover:text-[#08204C] transition-colors"
                >
                  <span>Baca Selengkapnya Tentang LIB</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ISO CONSULTING SPOTLIGHT */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2 block">
                Pendampingan Sistem Manajemen
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
                Build Stronger Management Systems. Prepare with Confidence.
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Pendampingan implementasi ISO yang terstruktur, berbasis kebutuhan organisasi, dan berorientasi pada perbaikan berkelanjutan.
              </p>
            </div>
            <Link
              to="/iso-consulting"
              className="inline-flex items-center text-sm font-semibold text-[#0069D2] hover:text-[#08204C] whitespace-nowrap shrink-0"
            >
              <span>Detail Layanan ISO</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {isoServices.map((iso) => (
              <div
                key={iso.id}
                className="bg-[#F1F6FB] rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0069D2] tracking-wider uppercase">
                      {iso.standard}
                    </span>
                    <span className="text-xs text-slate-500">Pendampingan Implementasi</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#08204C]">
                    {iso.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {iso.tagline}
                  </p>
                  
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Ruang Lingkup Pendampingan:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {iso.scopeOfAssistance.slice(0, 6).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009696] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to="/iso-consulting"
                    className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1"
                  >
                    <span>Pelajari Tahapan Konsultasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-md transition-colors"
                  >
                    Jadwalkan Konsultasi
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Regulatory Disclaimer */}
          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-800">Pemberitahuan Transparansi Layanan:</strong> LIB bertindak sebagai konsultan dan pendamping persiapan implementasi sistem manajemen. Audit sertifikasi eksternal dan keputusan penerbitan sertifikat dilakukan secara independen oleh lembaga sertifikasi yang berwenang. LIB tidak menyatakan diri sebagai lembaga sertifikasi dan tidak menjanjikan kelulusan audit tanpa pemenuhan nyata atas persyaratan standar oleh pihak organisasi.
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS BY BUSINESS NEEDS */}
      <section className="py-16 bg-[#F1F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2 block">
              Solusi Berorientasi Masalah
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
              Menjawab Tantangan Nyata Operasional Bisnis Anda
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Kami menyusun pendekatan teknologi berdasarkan problem bisnis yang dihadapi, bukan sekadar menawarkan produk generik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.slice(0, 6).map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#0069D2]">
                    {sol.category}
                  </div>
                  <h3 className="text-base font-bold text-[#08204C]">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sol.tagline}
                  </p>
                  
                  <div className="pt-2 text-xs space-y-1.5 border-t border-slate-100">
                    <p className="text-slate-500 font-medium">Tantangan Klien:</p>
                    <p className="text-slate-600 line-clamp-2">{sol.clientChallenge}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to={`/solutions#${sol.id}`}
                    className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1"
                  >
                    <span>Lihat Rincian Pendekatan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors"
            >
              Lihat Seluruh Solusi Bisnis
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT PROCESS (HOW WE WORK) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2 block">
              Metodologi Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08204C] tracking-tight">
              Langkah Kerja Terstruktur & Transparan
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Setiap proyek dikerjakan dengan proses yang terukur, menjaga akuntabilitas dan kejelasan hasil pada setiap fase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Konsultasi & Asesmen Kebutuhan',
                desc: 'Menggali permasalahan spesifik, kondisi eksisting sistem, dan target sasaran yang ingin dicapai manajemen.'
              },
              {
                num: '02',
                title: 'Perumusan Solusi & Roadmap',
                desc: 'Menyusun spesifikasi teknis, dokumen arsitektur, jadwal implementasi, dan alokasi sumber daya yang realistis.'
              },
              {
                num: '03',
                title: 'Implementasi & Pengujian Terkendali',
                desc: 'Eksekusi rekayasa atau penyusunan SOP dengan kontrol mutu ketat, pengujian fungsional, dan mitigasi risiko.'
              },
              {
                num: '04',
                title: 'Serah Terima & Pendampingan',
                desc: 'Pelatihan pengguna, serah terima dokumentasi teknis lengkap, serta evaluasi kestabilan operasional berkesinambungan.'
              }
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-xl bg-[#F1F6FB] border border-slate-200 relative">
                <span className="text-2xl font-black text-[#0069D2]/30 mb-2 block font-mono">
                  {step.num}
                </span>
                <h3 className="text-sm font-bold text-[#08204C] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION CTA */}
      <section className="py-16 bg-gradient-to-r from-[#08204C] via-[#08204C] to-[#0069D2] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Siap Membangun Masa Depan Teknologi Bisnis Anda?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan rekayasa perangkat lunak, evaluasi keamanan siber, atau pendampingan standar ISO bersama konsultan CV Lintas Informatika Buana.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#08204C] bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors"
            >
              Konsultasi Sekarang
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
            >
              Minta Informasi Produk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
