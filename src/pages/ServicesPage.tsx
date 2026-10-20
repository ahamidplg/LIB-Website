import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Server, 
  Search, 
  HelpCircle 
} from 'lucide-react';
import { servicesData } from '../data/services';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'IT Consulting & Governance',
    'Cybersecurity Advisory',
    'Software & Application Development',
    'IT Infrastructure & Integration'
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCat = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Layanan Teknologi Informasi | CV Lintas Informatika Buana"
        description="Layanan terpadu IT Consulting & Governance, Cybersecurity Advisory, Software Development, dan IT Infrastructure dari CV Lintas Informatika Buana."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Layanan Teknologi' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Layanan Profesional
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Layanan Solusi TI, Tata Kelola & Keamanan Informasi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Pendekatan menyeluruh mulai dari konsultasi strategis, pengamanan siber, rekayasa perangkat lunak berstandar industri, hingga integrasi infrastruktur komputasi.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Category Segmented Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-lg max-w-full overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-[#08204C] shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'Semua Layanan' : cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari layanan spesifik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F1F6FB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] text-slate-800"
              />
            </div>

          </div>

          <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span>Menampilkan {filteredServices.length} layanan terstruktur</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[#0069D2] hover:underline"
              >
                Hapus pencarian
              </button>
            )}
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between hover:shadow-xs transition-all group"
            >
              <div className="space-y-3">
                <div className="text-[11px] font-semibold text-[#0069D2]">
                  {srv.category}
                </div>

                <h3 className="text-base font-bold text-[#08204C] group-hover:text-[#0069D2] transition-colors leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {srv.shortDesc}
                </p>

                {/* Scope items preview */}
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <p className="font-semibold text-slate-700">Fokus Ruang Lingkup:</p>
                  <ul className="space-y-1">
                    {srv.scope.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="line-clamp-1">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/services/${srv.id}`}
                  className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Lihat Detail Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#0069D2] rounded-md transition-colors"
                >
                  Konsultasi
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Cross-Links to Dedicated ISO and Governance Pages */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-[#F1F6FB] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
                  Halaman Khusus
                </span>
                <h3 className="text-lg font-bold text-[#08204C] mb-2">
                  ISO Consulting (ISO/IEC 27001 & ISO 9001)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pelajari 7 tahapan konsultasi terstruktur dan rincian kesiapan audit sertifikasi eksternal sistem manajemen organisasi Anda.
                </p>
              </div>
              <div className="pt-4 mt-2">
                <Link
                  to="/iso-consulting"
                  className="inline-flex items-center text-xs font-semibold text-[#0069D2] hover:text-[#08204C]"
                >
                  <span>Buka Halaman ISO Consulting</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F1F6FB] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-1">
                  Halaman Khusus
                </span>
                <h3 className="text-lg font-bold text-[#08204C] mb-2">
                  Cybersecurity & IT Governance Framework
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eksplorasi siklus tata kelola, manajemen risiko, implementasi kontrol keamanan, hingga continual improvement berbasis standar NIST & ISO.
                </p>
              </div>
              <div className="pt-4 mt-2">
                <Link
                  to="/cybersecurity-governance"
                  className="inline-flex items-center text-xs font-semibold text-[#0069D2] hover:text-[#08204C]"
                >
                  <span>Buka Kerangka Cybersecurity & Governance</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
