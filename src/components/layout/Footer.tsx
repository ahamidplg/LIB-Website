import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ShieldCheck, FileText } from 'lucide-react';
import { companyData } from '../../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08204C] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Verified Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white/95 rounded-lg p-2 max-w-[280px]">
              <img
                src="/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png"
                alt="CV Lintas Informatika Buana"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm font-semibold text-white tracking-wide">
              {companyData.legalName}
            </p>
            <p className="text-sm italic text-[#00B5CC]">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Mitra teknologi tepercaya untuk solusi rekayasa perangkat lunak, integrasi sistem, tata kelola TI, cybersecurity, serta pendampingan implementasi standar ISO (ISO 27001 & ISO 9001).
            </p>

            {/* Verified Legal Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-4 h-4 text-[#00B5CC] shrink-0" />
                <span>NIB Terdaftar: <strong className="text-white font-mono">{companyData.nib}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan & Konsultasi */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services#consulting-governance" className="hover:text-white transition-colors">
                  IT Consulting & Governance
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-governance" className="hover:text-white transition-colors">
                  Cybersecurity Advisory
                </Link>
              </li>
              <li>
                <Link to="/iso-consulting" className="hover:text-white transition-colors">
                  ISO/IEC 27001 (ISMS)
                </Link>
              </li>
              <li>
                <Link to="/iso-consulting" className="hover:text-white transition-colors">
                  ISO 9001 (Mutu)
                </Link>
              </li>
              <li>
                <Link to="/services#software-dev" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#infra-integration" className="hover:text-white transition-colors">
                  IT Infrastructure & Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solusi & Produk */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Katalog & Solusi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Software & Digital Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  IT Infrastructure Equipment
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Solusi Kebutuhan Bisnis
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portofolio Konseptual
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Artikel & Wawasan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak Resmi */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kontak & Alamat
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0069D2] shrink-0 mt-0.5" />
                <span>
                  {companyData.address.street}, {companyData.address.subdistrict}, {companyData.address.district}, {companyData.address.city}, {companyData.address.province}, {companyData.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0069D2] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white text-slate-300 underline underline-offset-2 transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-xs font-medium transition-colors border border-white/10"
                >
                  Hubungi Tim LIB
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {companyData.legalName}. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Kebijakan Privasi</span>
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Informasi Legalitas
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Pusat Komunikasi
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
