import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F1F6FB] min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="Halaman Tidak Ditemukan (404) | CV Lintas Informatika Buana"
        description="Halaman yang Anda tuju tidak ditemukan pada situs CV Lintas Informatika Buana."
      />

      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-xs space-y-5">
        <span className="text-4xl font-extrabold text-[#0069D2] font-mono block">
          404
        </span>
        <h1 className="text-xl font-bold text-[#08204C]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          Tautan yang Anda tuju mungkin telah berpindah, diubah namanya, atau tidak tersedia sementara waktu.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1.5" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-700 bg-[#F1F6FB] hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
          >
            Jelajahi Layanan
          </Link>
        </div>
      </div>
    </div>
  );
};
