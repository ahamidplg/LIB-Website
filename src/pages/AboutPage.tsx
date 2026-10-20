import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Building2, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/company';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Tentang Kami & Legalitas | CV Lintas Informatika Buana"
        description="Profil perusahaan CV Lintas Informatika Buana (LIB), visi, misi, nilai perusahaan, lingkup bisnis, dan informasi legalitas NIB resmi di Palembang."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Tentang Kami' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Profil Perusahaan
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Melangkah Bersama, Membangun Masa Depan
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            CV Lintas Informatika Buana (LIB) adalah mitra penyedia solusi teknologi informasi, integrasi sistem, tata kelola TI, cybersecurity, serta pendampingan implementasi standar internasional ISO.
          </p>
        </div>

        {/* 1. Company Overview & Visual Brand Card */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#08204C]">
                Company Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Di tengah laju transformasi digital yang kian cepat, setiap entitas bisnis dan institusi publik dihadapkan pada dua tantangan krusial: bagaimana memanfaatkan perangkat lunak dan infrastruktur modern untuk meningkatkan efisiensi operasional, serta bagaimana menjaga keamanan informasi dan kepatuhan tata kelola agar terhindar dari risiko siber.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                CV Lintas Informatika Buana hadir untuk menjawab kedua tantangan tersebut. Berakar di Kota Palembang, Sumatera Selatan, kami melayani klien korporat, instansi pemerintah, dan pelaku usaha melalui metodologi kerja yang terstruktur, transparan, dan berbasis kebutuhan nyata organisasi.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                <span className="bg-[#F1F6FB] px-3 py-1.5 rounded-md border border-slate-200">
                  Badan Usaha Resmi: CV Lintas Informatika Buana
                </span>
                <span className="bg-[#F1F6FB] px-3 py-1.5 rounded-md border border-slate-200">
                  NIB: {companyData.nib}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 bg-[#F1F6FB] rounded-xl border border-slate-200 w-full flex flex-col items-center text-center">
                <img
                  src="/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png"
                  alt="Logo Resmi CV Lintas Informatika Buana"
                  className="h-20 w-auto object-contain mb-4"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                  Identitas Brand Terdaftar
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  &ldquo;{companyData.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0069D2]/10 flex items-center justify-center text-[#0069D2] mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#08204C] mb-3">
                Visi Perusahaan
              </h3>
              <p className="text-sm text-slate-700 font-medium leading-relaxed italic bg-[#F1F6FB] p-5 rounded-xl border border-slate-200/60">
                &ldquo;{companyData.vision}&rdquo;
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
              Landasan komitmen jangka panjang dalam setiap pendampingan dan kemitraan teknologi.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#009696]/10 flex items-center justify-center text-[#009696] mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#08204C] mb-3">
              Misi Perusahaan
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {companyData.missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#0069D2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Core Values */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
              Budaya & Prinsip
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08204C]">
              Nilai-Nilai Utama Perusahaan (Core Values)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Prinsip etis dan profesional yang memandu setiap interaksi dengan klien, mitra, dan pemangku kepentingan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companyData.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-[#F1F6FB] border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-sm font-bold text-[#08204C] mb-2 pb-2 border-b border-slate-200/60">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Business Scope & Our Approach */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Business Scope */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-[#08204C] mb-4">
              Ruang Lingkup Bisnis (Business Scope)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              CV Lintas Informatika Buana mengonsolidasikan kapabilitas pada empat domain teknologi informasi saling melengkapi:
            </p>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-lg bg-[#F1F6FB] border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">1. Solusi Perangkat Lunak & Integrasi:</strong>
                Pengembangan web application, otomasi alur kerja proses bisnis, perancangan database terstruktur, dan integrasi antar-sistem via secure API.
              </div>
              <div className="p-3 rounded-lg bg-[#F1F6FB] border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">2. Tata Kelola Teknologi Informasi (IT Governance):</strong>
                Penyelarasan strategi TI, evaluasi maturitas proses operasional, penyusunan roadmap teknologi multi-tahun, dan standardisasi dokumentasi teknis.
              </div>
              <div className="p-3 rounded-lg bg-[#F1F6FB] border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">3. Cybersecurity Advisory:</strong>
                Asesmen postur keamanan informasi, identifikasi risiko dan perumusan Risk Treatment Plan, serta penyusunan kerangka kebijakan keamanan.
              </div>
              <div className="p-3 rounded-lg bg-[#F1F6FB] border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">4. ISO Management System Consulting:</strong>
                Pendampingan implementasi kesiapan audit sistem manajemen mutu (ISO 9001) dan keamanan informasi (ISO/IEC 27001).
              </div>
            </div>
          </div>

          {/* Our Approach & Why Choose LIB */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#08204C] mb-4">
                Mengapa Memilih LIB? (Why Choose LIB)
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Metodologi Berorientasi Masalah</strong>
                    Kami menganalisis akar masalah operasional sebelum merekomendasikan solusi arsitektur teknologi.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Dokumentasi Standar & Terbuka</strong>
                    Setiap deliverable dilengkapi dokumentasi teknis transparan dan siap guna tanpa ketergantungan sepihak (no vendor lock-in).
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Kepatuhan Legalitas & Etika Bisnis</strong>
                    Mematuhi regulasi perizinan berusaha Republik Indonesia, menjaga kerahasiaan data klien, serta tidak membuat klaim sepihak yang menyesatkan.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Kemitraan Jangka Panjang</strong>
                    Berkomitmen menjadi penasihat teknologi yang dapat dihubungi kapan saja saat sistem Anda berkembang.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-semibold text-[#0069D2] hover:text-[#08204C]"
              >
                <span>Diskusikan Rencana Proyek Anda</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

        </section>

        {/* 5. Company Legal Information Section */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-8 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#0069D2]/10 flex items-center justify-center text-[#0069D2]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#08204C]">
                Informasi Legalitas Perusahaan (Company Legal Information)
              </h2>
              <p className="text-xs text-slate-500">
                Data resmi entitas usaha yang telah diverifikasi berdasarkan sistem perizinan berusaha nasional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F1F6FB] p-6 rounded-xl border border-slate-200 text-xs sm:text-sm">
            <div className="space-y-3">
              <div>
                <span className="text-slate-500 block text-xs">Nama Badan Usaha:</span>
                <strong className="text-slate-900">{companyData.legalName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Nama Brand / Singkatan:</span>
                <strong className="text-slate-900">{companyData.brandName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Nomor Induk Berusaha (NIB):</span>
                <strong className="text-slate-900 font-mono text-sm">{companyData.nib}</strong>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-slate-500 block text-xs">Alamat Resmi Berdasarkan NIB:</span>
                <p className="text-slate-900 font-medium">
                  {companyData.address.street}, {companyData.address.subdistrict}, {companyData.address.district}, {companyData.address.city}, {companyData.address.province}, {companyData.address.country}
                </p>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Email Korespondensi Resmi:</span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-[#0069D2] hover:underline font-medium"
                >
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
            <strong>Catatan Kepatuhan Data:</strong> Demi mematuhi prinsip perlindungan privasi dan keamanan informasi, data sensitif seperti NPWP, tanda tangan pejabat korporat, atau nomor identitas pribadi tidak dipublikasikan pada website terbuka. Dokumen legalitas lengkap dapat diverifikasi melalui nota kesepahaman (NDA) pada proses pengadaan resmi.
          </div>
        </section>

      </div>
    </div>
  );
};
