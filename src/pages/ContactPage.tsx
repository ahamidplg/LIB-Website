import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Code, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';
import { companyData } from '../data/company';
import { ContactFormData } from '../types';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: 'IT Consulting',
    subject: '',
    projectDescription: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  const serviceOptions = [
    'IT Consulting',
    'Cybersecurity',
    'ISO/IEC 27001',
    'ISO 9001',
    'Software Development',
    'IT Infrastructure',
    'Products & Procurement',
    'Other'
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nama perusahaan atau institusi wajib diisi.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format alamat email tidak valid.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon / kontak wajib diisi.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek pesan wajib diisi.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      newErrors.projectDescription = 'Deskripsi proyek minimal 15 karakter agar tim dapat memahami kebutuhan Anda.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Anda harus menyetujui pemrosesan data untuk keperluan komunikasi penawaran.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceInterest: 'IT Consulting',
      subject: '',
      projectDescription: '',
      consent: false,
    });
    setErrors({});
  };

  const mailtoUrl = `mailto:${companyData.email}?subject=${encodeURIComponent(
    `[Inquiry Website] ${formData.subject || 'Konsultasi Layanan TI'}`
  )}&body=${encodeURIComponent(
    `Nama: ${formData.fullName}\nInstansi: ${formData.company}\nNo. Telp: ${formData.phone}\nPeminatan Layanan: ${formData.serviceInterest}\n\nDeskripsi Kebutuhan:\n${formData.projectDescription}`
  )}`;

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Hubungi Kami & Konsultasi | CV Lintas Informatika Buana"
        description="Hubungi tim CV Lintas Informatika Buana untuk konsultasi IT solutions, cybersecurity, implementasi ISO 27001 dan ISO 9001. Alamat resmi di Palembang."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Kontak & Konsultasi' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Saluran Komunikasi Resmi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Diskusikan Kebutuhan Teknologi & Tata Kelola Anda
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Sampaikan deskripsi rencana proyek, kebutuhan audit sistem manajemen, atau permohonan informasi produk. Tim CV Lintas Informatika Buana siap menindaklanjuti secara profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Form (with validated demo/simulation state) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-[#08204C]">
                    Formulir Permintaan Konsultasi
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Isi rincian di bawah ini untuk memulai interaksi resmi.
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => setShowConfigGuide(!showConfigGuide)}
                  className="text-xs text-[#0069D2] hover:underline flex items-center gap-1"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{showConfigGuide ? 'Tutup Panduan API' : 'Integrasi Backend API'}</span>
                </button>
              </div>

              {/* Backend API Configuration Instructions (shown when toggled) */}
              {showConfigGuide && (
                <div className="mb-6 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono space-y-2 border border-slate-700">
                  <div className="text-emerald-400 font-bold font-sans flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Petunjuk Integrasi Layanan Backend:</span>
                  </div>
                  <p className="font-sans text-slate-300">
                    Formulir ini dirancang modular. Untuk menghubungkan ke webhook CRM, SendGrid, Mailgun, Resend, atau endpoint Express internal, arahkan handler submit pada <code className="text-cyan-300">src/services/contactService.ts</code> atau gunakan proxy POST <code className="text-cyan-300">/api/contact</code>.
                  </p>
                  <p className="text-slate-400 font-sans">
                    Data input saat ini diproses dalam mode validasi client-side transparan dengan opsi fallback langsung ke email resmi.
                  </p>
                </div>
              )}

              {/* SUCCESS STATE */}
              {submittedData ? (
                <div className="p-6 rounded-2xl bg-[#F1F6FB] border border-[#0069D2]/30 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#08204C]">
                    Permintaan Berhasil Tervalidasi
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    Terima kasih, <strong className="text-slate-900">{submittedData.fullName}</strong> dari <strong className="text-slate-900">{submittedData.company}</strong>. Rincian permintaan konsultasi Anda untuk <strong className="text-slate-900">{submittedData.serviceInterest}</strong> telah tercatat pada formulir.
                  </p>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 font-mono">
                    <p><strong>Subjek:</strong> {submittedData.subject}</p>
                    <p><strong>Email Kontak:</strong> {submittedData.email}</p>
                    <p><strong>Telepon:</strong> {submittedData.phone}</p>
                    <p className="pt-1 text-slate-500 font-sans">{submittedData.projectDescription}</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5" />
                      <span>Kirim Langsung ke Email Resmi</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUT FIELDS */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Ahmad Hidayat"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Perusahaan / Organisasi *
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Mitra Sejahtera"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                          errors.company ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        placeholder="email@perusahaan.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nomor Telepon / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="0812-XXXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service Interest & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Peminatan Layanan *
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] text-slate-800"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subjek Pesan *
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Konsultasi Kesiapan ISO 27001"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                          errors.subject ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Deskripsi Kebutuhan Proyek *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan secara singkat latar belakang tantangan TI, sistem yang sedang berjalan, estimasi jadwal, atau cakupan pekerjaan yang diinginkan..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs bg-[#F1F6FB] border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] ${
                        errors.projectDescription ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Privacy Policy Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded text-[#0069D2] focus:ring-[#0069D2] w-4 h-4"
                      />
                      <span className="text-xs text-slate-600">
                        Saya menyetujui data yang dikirimkan diproses oleh CV Lintas Informatika Buana sesuai ketentuan{' '}
                        <a href="/privacy-policy" target="_blank" className="text-[#0069D2] hover:underline">
                          Kebijakan Privasi
                        </a>.
                      </span>
                    </label>
                    {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] disabled:bg-slate-400 rounded-lg transition-colors shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Memproses Validasi...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 mr-2" />
                          <span>Kirim Permintaan Konsultasi</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Verified Contact Information & Legal Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-[#08204C]">
                Informasi Kontak Resmi Perusahaan
              </h3>
              
              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Nama Badan Usaha:</strong>
                    <span>{companyData.legalName} ({companyData.brandName})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#009696] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Nomor Induk Berusaha (NIB):</strong>
                    <span className="font-mono text-slate-800">{companyData.nib}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Alamat Kantor Berdasarkan NIB:</strong>
                    <p className="leading-relaxed">
                      {companyData.address.street}, {companyData.address.subdistrict}, {companyData.address.district}, {companyData.address.city}, {companyData.address.province}, {companyData.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email Korespondensi:</strong>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-[#0069D2] hover:underline font-medium"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Mail Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${companyData.email}?subject=Permohonan%20Konsultasi%20Teknologi`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-700 bg-[#F1F6FB] hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  <span>Kirim Email Langsung Melalui Email Client</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Working Commitments */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-[#08204C]">
                Jam Layanan & Waktu Respon
              </h4>
              <p className="leading-relaxed">
                Hari Kerja: Senin – Jumat (08:30 – 17:00 WIB)
              </p>
              <p className="leading-relaxed text-slate-500">
                Setiap pesan yang masuk melalui formulir atau email resmi akan direspon dalam waktu 1x24 jam kerja oleh tim konsultan terkait.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
