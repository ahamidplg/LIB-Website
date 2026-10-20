# CV Lintas Informatika Buana (LIB) — Panduan & Dokumentasi Resmi Website

Selamat datang di repositori website resmi **CV Lintas Informatika Buana (LIB)**. Repositori ini berisi kode sumber aplikasi web korporat berbasis **React**, **TypeScript**, **Tailwind CSS**, dan **Vite** yang dirancang dengan standar arsitektur modern, performa tinggi, responsif, dan siap dikembangkan lebih lanjut untuk lingkungan produksi.

---

## Daftar Isi
1. [Tentang Perusahaan & Legalitas](#1-tentang-perusahaan--legalitas)
2. [Fitur Utama & Struktur Halaman](#2-fitur-utama--struktur-halaman)
3. [Struktur Direktori Proyek](#3-struktur-direktori-proyek)
4. [Prasyarat & Persiapan Lingkungan](#4-prasyarat--persiapan-lingkungan)
5. [Instalasi Dependensi](#5-instalasi-dependensi)
6. [Menjalankan Development Server](#6-menjalankan-development-server)
7. [Kompilasi & Build Produksi](#7-kompilasi--build-produksi)
8. [Panduan Mengubah Logo & Aset Visual](#8-panduan-mengubah-logo--aset-visual)
9. [Panduan Memperbarui Konten (Data Management)](#9-panduan-memperbarui-konten-data-management)
   - [Mengubah Data Profil Perusahaan](#a-mengubah-data-profil-perusahaan)
   - [Mengubah Katalog Produk](#b-mengubah-katalog-produk)
   - [Mengubah Katalog Layanan](#c-mengubah-katalog-layanan)
   - [Mengubah Pendampingan ISO](#d-mengubah-pendampingan-iso)
   - [Mengubah Cybersecurity & Governance](#e-mengubah-cybersecurity--governance)
   - [Mengubah Solusi Bisnis & Portofolio](#f-mengubah-solusi-bisnis--portofolio)
   - [Menambah & Mengubah Artikel Wawasan](#g-menambah--mengubah-artikel-wawasan)
10. [Konfigurasi Formulir Kontak & Integrasi Backend API](#10-konfigurasi-formulir-kontak--integrasi-backend-api)
11. [Panduan Deployment ke Hosting](#11-panduan-deployment-ke-hosting)
    - [Vercel](#a-deploy-ke-vercel)
    - [Netlify](#b-deploy-ke-netlify)
    - [Server Mandiri / VPS (Nginx)](#c-deploy-ke-server-mandiri--vps-nginx)
12. [SEO, Aksesibilitas & Kepatuhan Data](#12-seo-aksesibilitas--kepatuhan-data)
13. [Lisensi & Hak Cipta](#13-lisensi--hak-cipta)

---

## 1. Tentang Perusahaan & Legalitas

- **Nama Badan Usaha:** CV Lintas Informatika Buana
- **Nama Brand:** LIB
- **Tagline:** *“Melangkah Bersama, Membangun Masa Depan.”*
- **Positioning:** Technology Solutions, IT Governance, Cybersecurity & ISO Consulting
- **Nomor Induk Berusaha (NIB):** `0299010010098` (Terdaftar resmi pada sistem OSS RI)
- **Alamat Kantor:** Jalan Musi Raya Barat Blok VII/493, Kelurahan Sialang, Kecamatan Sako, Kota Palembang, Sumatera Selatan
- **Email Korespondensi:** `lintasinformatikabuana@gmail.com`

---

## 2. Fitur Utama & Struktur Halaman

Website ini dibangun dengan 11 halaman inti dan fitur interaktif:

| Rute URL | Nama Halaman | Keterangan & Fitur Utama |
|---|---|---|
| `/` | **Beranda (Home)** | Hero section dengan visualisasi jaringan globe interaktif canvas, 4 Pilar Bisnis, ringkasan profil, spotlight ISO, solusi bisnis, dan alur kerja. |
| `/about` | **Tentang Kami & Legalitas** | Visi & Misi resmi, 5 Nilai Utama (*Core Values*), ruang lingkup bisnis, keunggulan LIB, serta data legalitas NIB. |
| `/products` | **Katalog Produk** | Katalog 3 kelompok produk dengan fitur filter kategori segmented, live search, dan kartu modul. |
| `/products/:id` | **Detail Produk** | Deskripsi lengkap, fitur utama, skenario penggunaan (*use cases*), manfaat bisnis, dan tombol inquiry. |
| `/services` | **Layanan Teknologi** | Direktori 4 kelompok layanan IT Consulting, Cybersecurity, Software Engineering, dan IT Infrastructure. |
| `/services/:id` | **Detail Layanan** | 7 struktur terpadu: Overview, Business Challenges, Scope of Work, Engagement Process, Deliverables, FAQ accordion, dan CTA. |
| `/iso-consulting` | **ISO Consulting** | Halaman khusus pendampingan ISO/IEC 27001 (ISMS) & ISO 9001 (QMS), panduan 7 tahapan konsultasi, dan disclaimer independensi. |
| `/cybersecurity-governance` | **Cybersecurity & IT Governance** | Diagram visual siklus tata kelola (Governance → Risk Assessment → Implementation → Evaluation → Continual Improvement) & acuan standar. |
| `/solutions` | **Solusi Bisnis** | Solusi berdasarkan masalah nyata klien (Transformasi Digital, Modernisasi Ruang Server, Perbaikan Postur Keamanan, dll.). |
| `/portfolio` | **Portofolio Konseptual** | Studi kasus ilustratif metodologi implementasi dengan label kepatuhan transparansi (*Portfolio examples — illustrative concepts*). |
| `/portfolio/:id` | **Detail Portofolio** | Tantangan, ruang lingkup, teknologi/framework terkait, dan hasil yang dicapai (*outcome*). |
| `/insights` | **Artikel & Wawasan** | Pusat literasi dan edukasi dengan filter topik, pencarian, dan estimasi waktu baca (*reading time*). |
| `/insights/:slug` | **Detail Artikel** | Halaman baca artikel dengan tipografi terstandar, info penulis, dan artikel terkait. |
| `/contact` | **Kontak & Konsultasi** | Formulir permintaan konsultasi tervalidasi dengan opsi layanan, simulasi status, panduan API, dan tombol mailto alternatif. |
| `/privacy-policy` | **Kebijakan Privasi** | Kepatuhan terhadap UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). |
| `*` | **404 Not Found** | Penanganan rute tak terdaftar dengan tombol kembali ke beranda. |

---

## 3. Struktur Direktori Proyek

```text
├── index.html                   # Entry point HTML dengan meta tag SEO & Schema.org JSON-LD
├── metadata.json                # Konfigurasi nama dan deskripsi aplikasi AI Studio
├── package.json                 # Konfigurasi dependensi dan skrip npm
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Konfigurasi bundler Vite
├── public/
│   └── assets/
│       └── aistudio/
│           └── LIB-Global-Tech-Solutions-Logo_2262369b.png  # Logo resmi LIB
└── src/
    ├── App.tsx                  # Root component dengan routing BrowserRouter
    ├── main.tsx                 # Mounting React root
    ├── index.css                # Konfigurasi Tailwind CSS v4 & styling scrollbar
    ├── types/
    │   └── index.ts             # Definisi TypeScript interfaces
    ├── data/
    │   ├── company.ts           # Data legalitas, visi misi, dan pilar bisnis
    │   ├── products.ts          # Katalog produk & solusi
    │   ├── services.ts          # Katalog layanan & detail engagement
    │   ├── iso.ts               # Data pendampingan ISO 27001 & ISO 9001
    │   ├── governance.ts        # Data siklus cybersecurity & governance
    │   ├── solutions.ts         # Data solusi berbasis masalah klien
    │   ├── portfolio.ts         # Studi kasus konseptual portofolio
    │   └── articles.ts          # Data artikel edukasi & wawasan
    ├── services/
    │   └── contactService.ts    # Handler pengiriman formulir kontak ke backend/API
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Header dengan kontrak 3-zona & mobile drawer
    │   │   └── Footer.tsx       # Footer korporat lengkap dengan NIB & tautan
    │   └── common/
    │       ├── SEO.tsx          # Dynamic head title & meta manager
    │       ├── Breadcrumbs.tsx  # Navigasi rekam jejak unboxed
    │       ├── ScrollToTop.tsx  # Listener scroll-to-top perpindahan rute
    │       ├── BackToTopButton.tsx # Tombol floating kembali ke atas
    │       └── TechVisualGlobe.tsx # Canvas visualisasi globe & orbit teknologi
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        ├── ProductsPage.tsx
        ├── ProductDetailPage.tsx
        ├── ServicesPage.tsx
        ├── ServiceDetailPage.tsx
        ├── ISOConsultingPage.tsx
        ├── CybersecurityGovernancePage.tsx
        ├── SolutionsPage.tsx
        ├── PortfolioPage.tsx
        ├── PortfolioDetailPage.tsx
        ├── InsightsPage.tsx
        ├── InsightDetailPage.tsx
        ├── ContactPage.tsx
        ├── PrivacyPolicyPage.tsx
        └── NotFoundPage.tsx
```

---

## 4. Prasyarat & Persiapan Lingkungan

Sebelum menjalankan proyek, pastikan komputer Anda telah terinstal:
- **Node.js**: Versi `18.x` atau `20.x LTS` (disarankan)
- **npm**: Versi `9.x` atau lebih baru (bawaan Node.js)
- Git (opsional, untuk version control)

Cek versi yang terpasang di terminal:
```bash
node -v
npm -v
```

---

## 5. Instalasi Dependensi

Jalankan perintah berikut di direktori root proyek untuk mengunduh seluruh pustaka yang diperlukan:

```bash
npm install
```

Paket utama yang dipasang:
- `react` & `react-dom` (versi 19)
- `react-router-dom` (untuk perutean SPA)
- `lucide-react` (kumpulan ikon UI)
- `@tailwindcss/vite` & `tailwindcss` (sistem styling modern)
- `typescript` & `@types/*` (keamanan tipe data statis)

---

## 6. Menjalankan Development Server

Untuk menjalankan server pengembangan lokal dengan fitur hot-reload:

```bash
npm run dev
```

Secara default, aplikasi akan berjalan pada:
```text
http://localhost:3000
```
Buka URL di atas pada browser pilihan Anda (Google Chrome, Mozilla Firefox, Safari, Edge).

---

## 7. Kompilasi & Build Produksi

### A. Validasi Kode (Linting / Type-Check)
Untuk memastikan tidak ada kesalahan sintaks atau tipe data TypeScript:
```bash
npm run lint
```

### B. Kompilasi Bundel Produksi
Untuk mengompilasi dan mengoptimasi seluruh berkas HTML, JavaScript, dan CSS ke folder `dist/`:
```bash
npm run build
```

### C. Menjalankan Preview Hasil Build
Untuk menguji hasil build sebelum diunggah ke server:
```bash
npm run preview
```

---

## 8. Panduan Mengubah Logo & Aset Visual

Logo resmi CV Lintas Informatika Buana tersimpan di:
```text
public/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png
```

### Cara Mengganti Logo:
1. Siapkan file logo baru dengan format PNG berlatar transparan (resolusi yang disarankan minimal tinggi 200px).
2. Simpan file baru di folder `public/assets/` (misal: `public/assets/logo-lib.png`).
3. Perbarui path logo pada file:
   - `src/components/layout/Navbar.tsx` (baris tag `<img>`)
   - `src/components/layout/Footer.tsx` (baris tag `<img>`)
   - `src/pages/HomePage.tsx` & `src/pages/AboutPage.tsx`
   - `index.html` (tag `<link rel="icon">` dan Schema.org JSON-LD).

---

## 9. Panduan Memperbarui Konten (Data Management)

Semua konten teks, katalog produk, rincian layanan, dan artikel dipisahkan dari komponen tampilan. Anda **tidak perlu mengutak-atik file JSX/TSX** untuk sekadar memperbarui konten.

### A. Mengubah Data Profil Perusahaan
Buka file `src/data/company.ts`:
```typescript
export const companyData: CompanyInfo = {
  legalName: 'CV Lintas Informatika Buana',
  brandName: 'LIB',
  tagline: 'Melangkah Bersama, Membangun Masa Depan.',
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
  // ... visi, misi, dan nilai-nilai inti
};
```

### B. Mengubah Katalog Produk
Buka file `src/data/products.ts`:
- Tambahkan atau edit objek dalam array `productsCatalogue`.
- Setiap produk memiliki properti `id`, `name`, `category`, `shortDesc`, `fullDesc`, `features`, `useCases`, `benefits`, dan `statusNote`.

### C. Mengubah Katalog Layanan
Buka file `src/data/services.ts`:
- Edit objek dalam array `servicesData`.
- Tersedia 4 kategori: `'IT Consulting & Governance'`, `'Cybersecurity Advisory'`, `'Software & Application Development'`, `'IT Infrastructure & Integration'`.
- Setiap layanan memuat `businessChallenges`, `scope`, `engagementProcess` (step by step), `expectedDeliverables`, dan `faqs`.

### D. Mengubah Pendampingan ISO
Buka file `src/data/iso.ts`:
- Menyesuaikan ruang lingkup pendampingan ISO/IEC 27001 dan ISO 9001.
- Menyesuaikan deskripsi pada 7 tahapan konsultasi (`isoConsultingStages`).
- Mengubah teks pernyataan independensi konsultan (`isoHeroData.disclaimer`).

### E. Mengubah Cybersecurity & Governance
Buka file `src/data/governance.ts`:
- Menyesuaikan 5 tahapan siklus tata kelola (`governanceFrameworkStages`).
- Mengubah topik pendampingan (`governanceAdvisoryTopics`).
- Mengubah referensi framework (`referenceFrameworks`).

### F. Mengubah Solusi Bisnis & Portofolio
- Solusi kebutuhan bisnis: edit `src/data/solutions.ts`.
- Studi kasus portofolio konseptual: edit `src/data/portfolio.ts`.

### G. Menambah & Mengubah Artikel Wawasan
Buka file `src/data/articles.ts`:
- Tambahkan objek baru ke array `articlesData`:
```typescript
{
  id: '7',
  slug: 'judul-artikel-baru',
  title: 'Judul Artikel Baru Anda',
  category: 'Cybersecurity', // atau 'ISO 27001', 'ISO 9001', dll.
  date: '20 Oktober 2026',
  readTime: '4 min baca',
  isSampleContent: false,
  author: 'Tim Konsultan LIB',
  excerpt: 'Ringkasan singkat artikel...',
  content: [
    'Paragraf pertama isi artikel...',
    'Paragraf kedua isi artikel...'
  ]
}
```

---

## 10. Konfigurasi Formulir Kontak & Integrasi Backend API

Formulir kontak pada `/contact` telah dilengkapi dengan validasi input menyeluruh (nama, instansi, format email, nomor telepon, peminatan layanan, subjek, deskripsi kebutuhan, dan persetujuan kebijakan privasi).

File jembatan API terletak pada:
```text
src/services/contactService.ts
```

### Mengintegrasikan ke Backend / API Email:
Untuk menghubungkan formulir ke API eksternal (seperti Resend, SendGrid, Mailgun, webhook CRM, atau server Express Anda), buka `src/services/contactService.ts` dan ubah implementasi fungsi `submitContactInquiry`:

```typescript
export async function submitContactInquiry(data: ContactFormData): Promise<SubmissionResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Gagal mengirim pesan ke server');
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Pesan Anda berhasil dikirim ke tim LIB.',
      referenceId: result.referenceId || `LIB-${Date.now()}`,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Terjadi kendala jaringan. Silakan hubungi kami via email resmi.',
    };
  }
}
```

Tersedia pula tautan fallback langsung `mailto:lintasinformatikabuana@gmail.com` dengan subject dan rincian yang otomatis terisi jika pengguna ingin mengirimkan surel langsung dari aplikasi email mereka.

---

## 11. Panduan Deployment ke Hosting

Karena website ini merupakan **Single Page Application (SPA)** berbasis client-side routing, pastikan server hosting diarahkan untuk selalu menyajikan `index.html` pada rute apa pun.

### A. Deploy ke Vercel
1. Hubungkan repositori Git ke akun [Vercel](https://vercel.com).
2. Konfigurasi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Buat file `vercel.json` di root proyek untuk menangani penulisan ulang rute (rewrite rule):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### B. Deploy ke Netlify
1. Hubungkan repositori ke [Netlify](https://netlify.com).
2. Konfigurasi:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Buat file `public/_redirects` dengan konten:
```text
/*    /index.html   200
```

### C. Deploy ke Server Mandiri / VPS (Nginx)
1. Jalankan `npm run build` di server atau mesin CI/CD.
2. Salin folder `dist/` ke direktori web server (misalnya `/var/www/lib-website`).
3. Konfigurasi blok server Nginx:
```nginx
server {
    listen 80;
    server_name lintasinformatikabuana.co.id www.lintasinformatikabuana.co.id;

    root /var/www/lib-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache untuk aset statis
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 12. SEO, Aksesibilitas & Kepatuhan Data

- **Semantic HTML**: Menggunakan elemen `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`.
- **OpenGraph & Twitter Cards**: Terintegrasi pada `index.html` dan dinamis via komponen `SEO.tsx`.
- **Schema.org Structured Data**: Disertai JSON-LD tipe `Corporation` lengkap dengan legalitas NIB, nama resmi, kontak surel, dan alamat Palembang.
- **Kepatuhan Privasi**: Menyediakan halaman kebijakan privasi berbahasa Indonesia yang selaras dengan prinsip UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).

---

## 13. Lisensi & Hak Cipta

© Hak Cipta dilindungi undang-undang oleh **CV Lintas Informatika Buana**. Seluruh materi, merek dagang, desain antarmuka, dan aset logo merupakan milik sah entitas usaha.
