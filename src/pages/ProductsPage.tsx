import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  HelpCircle, 
  Package, 
  Layers, 
  Server, 
  Laptop, 
  Database, 
  Cpu, 
  Workflow, 
  FileText 
} from 'lucide-react';
import { productsCatalogue } from '../data/products';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Software & Digital Solutions',
    'IT Infrastructure',
    'Technology Solutions'
  ];

  const filteredProducts = productsCatalogue.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getProductIcon = (id: string) => {
    if (id.includes('database')) return <Database className="w-5 h-5 text-[#0069D2]" />;
    if (id.includes('server') || id.includes('infrastructure')) return <Server className="w-5 h-5 text-[#08204C]" />;
    if (id.includes('network')) return <Cpu className="w-5 h-5 text-[#009696]" />;
    if (id.includes('workflow')) return <Workflow className="w-5 h-5 text-[#00B5CC]" />;
    if (id.includes('web') || id.includes('software')) return <Laptop className="w-5 h-5 text-[#0069D2]" />;
    return <Package className="w-5 h-5 text-[#0069D2]" />;
  };

  return (
    <div className="bg-[#F1F6FB] min-h-screen py-10 lg:py-14">
      <SEO
        title="Katalog Produk & Solusi | CV Lintas Informatika Buana"
        description="Katalog struktur produk perangkat lunak, infrastruktur TI, dan solusi teknologi terintegrasi dari CV Lintas Informatika Buana."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Katalog Produk' }]} />

        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold text-[#0069D2] uppercase tracking-wider block mb-2">
            Struktur Katalog Produk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#08204C] tracking-tight">
            Produk & Solusi Teknologi Informasi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Jelajahi portofolio kategori produk software, infrastruktur komputasi, dan integrasi sistem yang siap dikustomisasi sesuai spesifikasi operasional organisasi Anda.
          </p>
        </div>

        {/* Important Catalog Regulatory Notice */}
        <div className="mb-10 p-5 bg-blue-50/80 rounded-xl border border-blue-200/80 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-[#0069D2] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#08204C] block mb-1">Informasi Ketersediaan & Pengadaan Katalog:</strong>
            Kategori dan produk yang ditampilkan di bawah ini merupakan struktur portofolio solusi yang ditawarkan dan dirancang oleh CV Lintas Informatika Buana. Kami tidak menetapkan harga kaku ataupun mengklaim status keagenan merek tunggal tanpa dokumen penunjukan. Spesifikasi, penyusunan BoQ, dan penawaran teknis disesuaikan secara transparan berdasarkan hasil studi kebutuhan organisasi Anda.
          </div>
        </div>

        {/* Controls: Search and Interactive Category Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Functional Category Filter Buttons */}
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
                  {cat === 'All' ? 'Semua Produk' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari produk atau modul..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F1F6FB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0069D2] text-slate-800"
              />
            </div>

          </div>

          <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span>Menampilkan {filteredProducts.length} produk</span>
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 flex flex-col justify-between hover:shadow-xs transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#F1F6FB] border border-slate-100 flex items-center justify-center">
                    {getProductIcon(prod.id)}
                  </div>
                  {/* Clean unboxed category label */}
                  <span className="text-[11px] font-medium text-slate-500">
                    {prod.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#08204C] group-hover:text-[#0069D2] transition-colors">
                  {prod.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {prod.shortDesc}
                </p>

                {/* Key features preview */}
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p className="font-semibold text-slate-700">Fitur Utama:</p>
                  <ul className="space-y-1">
                    {prod.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="line-clamp-1">
                        · {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/products/${prod.id}`}
                  className="text-xs font-semibold text-[#0069D2] hover:text-[#08204C] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#0069D2] rounded-md transition-colors"
                >
                  Hubungi untuk Informasi
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500 space-y-3">
            <Package className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-medium">Tidak ada produk yang sesuai dengan kriteria pencarian.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-semibold text-[#0069D2] hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
