import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Mail, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import { productsCatalogue } from '../data/products';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsCatalogue.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = productsCatalogue
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title={`${product.name} | CV Lintas Informatika Buana`}
        description={product.shortDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Katalog Produk', path: '/products' },
            { label: product.name }
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0069D2] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Kembali ke Katalog Produk</span>
          </Link>
        </div>

        {/* Product Hero Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-8 shadow-xs">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#0069D2]">{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>Katalog Solusi LIB</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08204C] tracking-tight">
              {product.name}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {product.shortDesc}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-xs transition-colors"
              >
                Minta Informasi Produk Ini
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-3 text-xs font-semibold text-slate-700 bg-[#F1F6FB] hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              >
                Diskusikan Spesifikasi Kustom
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Content: Overview, Features & Use Cases */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Deskripsi & Pendekatan Teknis
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Fitur & Kapabilitas Sistem
              </h2>
              <ul className="space-y-3">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009696] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Skenario Penggunaan (Use Cases)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {product.useCases.map((uc, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#F1F6FB] border border-slate-200/80 text-xs text-slate-700">
                    <strong className="block text-slate-900 mb-1">Kasus {idx + 1}</strong>
                    {uc}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-[#08204C]">
                Manfaat Operasional Bagi Organisasi
              </h2>
              <ul className="space-y-2.5">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0069D2] shrink-0 mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Status Note & Inquiry Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Regulatory Status Box */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Status & Kebijakan Katalog</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.statusNote}
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                Spesifikasi teknis rinci dan Bill of Quantity (BoQ) dapat disusun bersama tim analis LIB.
              </div>
            </div>

            {/* Quick Contact Form Box */}
            <div className="bg-gradient-to-br from-[#08204C] to-[#0069D2] text-white rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold">
                Tertarik Mengimplementasikan Solusi Ini?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Hubungi konsultan kami untuk diskusi kebutuhan awal, estimasi arsitektur, dan simulasi alur kerja tanpa komitmen awal.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#08204C] bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                Hubungi Tim LIB
              </Link>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Produk Terkait dalam Kategori Ini
                </h4>
                <div className="space-y-3">
                  {relatedProducts.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/products/${rel.id}`}
                      className="block p-3 rounded-lg bg-[#F1F6FB] hover:bg-slate-100 transition-colors group"
                    >
                      <strong className="text-xs text-slate-900 group-hover:text-[#0069D2] block">
                        {rel.name}
                      </strong>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {rel.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
