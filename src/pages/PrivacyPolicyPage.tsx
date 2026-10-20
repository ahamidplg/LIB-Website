import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { companyData } from '../data/company';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Kebijakan Privasi | CV Lintas Informatika Buana"
        description="Kebijakan privasi dan perlindungan data pribadi CV Lintas Informatika Buana selaras dengan peraturan perundang-undangan di Republik Indonesia."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Kebijakan Privasi' }]} />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0069D2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-8 shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0069D2] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#009696]" />
            <span>Kepatuhan Regulasi & Perlindungan Data</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#08204C] tracking-tight">
            Kebijakan Privasi (Privacy Policy)
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Terakhir Diperbarui: 19 Oktober 2026 · Berlaku untuk seluruh layanan CV Lintas Informatika Buana
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              1. Komitmen Pengendali Data
            </h2>
            <p>
              {companyData.legalName} (&ldquo;LIB&rdquo;, &ldquo;kami&rdquo;), dengan Nomor Induk Berusaha (NIB) {companyData.nib}, beralamat di {companyData.address.street}, {companyData.address.subdistrict}, {companyData.address.district}, {companyData.address.city}, {companyData.address.province}, berkomitmen menjunjung tinggi hak privasi Anda dan mematuhi Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              2. Data Pribadi yang Kami Kumpulkan
            </h2>
            <p>
              Kami hanya mengumpulkan data pribadi yang relevan dan terbatas pada kebutuhan interaksi profesional yang Anda berikan secara sukarela melalui formulir kontak, surat elektronik, atau korespondensi langsung, mencakup:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Nama lengkap dan jabatan/posisi kerja.</li>
              <li>Nama instansi, badan hukum, atau perusahaan yang Anda wakili.</li>
              <li>Alamat surat elektronik (email) kantor atau pribadi.</li>
              <li>Nomor telepon seluler atau nomor kontak WhatsApp.</li>
              <li>Deskripsi ringkas kebutuhan proyek atau konsultasi teknologi.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              3. Tujuan Pemrosesan Data
            </h2>
            <p>
              Data pribadi yang dihimpun digunakan semata-mata untuk:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Merespon pertanyaan, permohonan penawaran harga, dan diskusi pra-konsultasi.</li>
              <li>Menyusun Kerangka Acuan Kerja (KAK) dan proposal teknis layanan.</li>
              <li>Melaksanakan kewajiban kontraktual dan administrasi perpajakan yang sah.</li>
              <li>Mematuhi kewajiban hukum yang diwajibkan oleh peraturan perundang-undangan.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              4. Larangan Penjualan dan Pembagian Data Pihak Ketiga
            </h2>
            <p>
              LIB tidak menjual, menyewakan, meminjamkan, atau memperdagangkan data pribadi Anda kepada pihak ketiga untuk keperluan periklanan, pemasaran massal, atau penambangan data tanpa persetujuan eksplisit tertulis dari Anda, kecuali jika diperintahkan oleh aparat penegak hukum berdasarkan putusan pengadilan yang sah.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              5. Pengamanan dan Retensi Data
            </h2>
            <p>
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang memadai, termasuk enkripsi transmisi data dan pembatasan hak akses berbasis wewenang karyawan. Data disimpan selama jangka waktu yang diperlukan untuk memenuhi tujuan perolehannya atau sebagaimana diwajibkan oleh peraturan perundang-undangan retensi dokumen bisnis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#08204C]">
              6. Hak Subjek Data Pribadi
            </h2>
            <p>
              Sesuai dengan ketentuan UU PDP, Anda berhak untuk meminta akses, pembetulan, penarikan persetujuan, atau penghapusan data pribadi Anda yang tersimpan di sistem kami. Permohonan dapat diajukan secara tertulis melalui alamat email resmi kami di <a href={`mailto:${companyData.email}`} className="text-[#0069D2] hover:underline font-medium">{companyData.email}</a>.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-base font-bold text-[#08204C]">
              7. Kontak Pengendali Data
            </h2>
            <p>
              Apabila Anda memiliki pertanyaan, keberatan, atau saran terkait kebijakan privasi ini, silakan hubungi:
            </p>
            <div className="p-4 rounded-xl bg-[#F1F6FB] border border-slate-200 text-xs space-y-1">
              <p><strong>{companyData.legalName}</strong></p>
              <p>Alamat: {companyData.address.street}, {companyData.address.subdistrict}, {companyData.address.district}, {companyData.address.city}, {companyData.address.province}</p>
              <p>Email: <a href={`mailto:${companyData.email}`} className="text-[#0069D2] hover:underline">{companyData.email}</a></p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
