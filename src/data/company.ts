import { CompanyInfo } from '../types';

export const companyData: CompanyInfo = {
  legalName: 'CV Lintas Informatika Buana',
  brandName: 'LIB',
  tagline: 'Melangkah Bersama, Membangun Masa Depan.',
  positioning: 'Technology Solutions, IT Governance, Cybersecurity & ISO Consulting',
  nib: '0299010010098',
  address: {
    street: 'Jalan Musi Raya Barat Blok VII/493',
    subdistrict: 'Kelurahan Sialang',
    district: 'Kecamatan Sako',
    city: 'Kota Palembang',
    province: 'Sumatera Selatan',
    country: 'Indonesia',
  },
  email: 'lintasinformatikabuana@gmail.com',
  vision: 'Menjadi mitra teknologi yang tepercaya dalam mendukung transformasi digital, tata kelola TI, dan penguatan keamanan informasi organisasi.',
  missions: [
    'Menyediakan solusi teknologi informasi sesuai kebutuhan bisnis.',
    'Mendukung pengembangan dan integrasi sistem digital.',
    'Membantu organisasi meningkatkan tata kelola TI dan keamanan informasi.',
    'Mendampingi implementasi sistem manajemen sesuai standar yang relevan.',
    'Membangun kemitraan profesional melalui integritas, kolaborasi, dan peningkatan berkelanjutan.',
  ],
  coreValues: [
    {
      title: 'Integrity',
      description: 'Menjunjung transparansi, etika bisnis, dan kejujuran dalam setiap komitmen konsultasi dan implementasi teknologi.',
    },
    {
      title: 'Innovation',
      description: 'Mengadopsi pendekatan arsitektur modern dan metode berbasis nilai untuk memecahkan tantangan teknologi secara terarah.',
    },
    {
      title: 'Professionalism',
      description: 'Bekerja dengan metodologi terstruktur, standar dokumentasi ketat, dan dedikasi terhadap keberhasilan proyek klien.',
    },
    {
      title: 'Collaboration',
      description: 'Menempatkan klien sebagai mitra strategis dengan komunikasi dua arah yang terbuka untuk mencapai hasil optimal.',
    },
    {
      title: 'Continuous Improvement',
      description: 'Mendorong siklus evaluasi berkala dan penyempurnaan berkesinambungan baik pada sistem TI maupun manajemen organisasi.',
    },
  ],
};

export const businessPillars = [
  {
    id: 'it-solutions',
    title: 'IT Solutions & Integration',
    description: 'Pengembangan aplikasi bisnis terintegrasi, digitalisasi alur kerja, dan modernisasi sistem pendukung operasi perusahaan.',
    link: '/services#software-dev',
  },
  {
    id: 'it-governance',
    title: 'IT Governance',
    description: 'Penyelarasan strategi TI dengan tujuan bisnis, penyusunan roadmap teknologi, audit proses, dan standardisasi dokumentasi.',
    link: '/cybersecurity-governance',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Penilaian celah keamanan informasi, manajemen risiko siber, dan perumusan kebijakan keamanan komprehensif.',
    link: '/cybersecurity-governance',
  },
  {
    id: 'iso-consulting',
    title: 'ISO Consulting',
    description: 'Pendampingan terstruktur kesiapan implementasi sistem manajemen ISO/IEC 27001 (Keamanan Informasi) dan ISO 9001 (Mutu).',
    link: '/iso-consulting',
  },
];
