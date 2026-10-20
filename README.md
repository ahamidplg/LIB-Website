# CV Lintas Informatika Buana (LIB) — Corporate Website

Website resmi perusahaan untuk **CV Lintas Informatika Buana (LIB)** yang dirancang dengan standar arsitektur korporat modern, responsif, elegan, dan siap digunakan untuk kebutuhan presentasi bisnis maupun produksi.

Website ini mencakup profil perusahaan, portofolio produk dan layanan teknologi informasi, tata kelola TI, konsultasi cybersecurity, serta pendampingan implementasi standar ISO (ISO 27001 & ISO 9001).

---

## 1. Identitas & Legalitas Perusahaan

- **Nama Badan Usaha:** CV Lintas Informatika Buana
- **Nama Brand:** LIB
- **Tagline:** “Melangkah Bersama, Membangun Masa Depan.”
- **Positioning:** Technology Solutions, IT Governance, Cybersecurity & ISO Consulting
- **Nomor Induk Berusaha (NIB):** `0299010010098`
- **Alamat Kantor:** Jalan Musi Raya Barat Blok VII/493, Kelurahan Sialang, Kecamatan Sako, Kota Palembang, Sumatera Selatan
- **Email Resmi:** `lintasinformatikabuana@gmail.com`

---

## 2. Struktur Halaman & Fitur

1. **Beranda (`/`):** Hero section dengan visualisasi jaringan globe digital interaktif, 4 pilar bisnis (IT Solutions, IT Governance, Cybersecurity, ISO Consulting), ringkasan profil, alur kerja, dan call-to-action (CTA).
2. **Tentang Kami & Legalitas (`/about`):** Gambaran umum, Visi & Misi resmi, Nilai Utama (Integrity, Innovation, Professionalism, Collaboration, Continuous Improvement), ruang lingkup bisnis, alasan memilih LIB, dan data legalitas NIB.
3. **Katalog Produk (`/products` & `/products/:id`):** Katalog usulan solusi terbagi ke dalam 3 kategori: *Software & Digital Solutions*, *IT Infrastructure*, dan *Technology Solutions* lengkap dengan filter kategori, pencarian interaktif, dan halaman rincian modul.
4. **Layanan Teknologi (`/services` & `/services/:id`):** Katalog layanan terstruktur (IT Consulting & Governance, Cybersecurity Advisory, Software Development, IT Infrastructure) dengan 7 komponen standar: Overview, Business Challenges, Scope of Services, Engagement Process, Expected Deliverables, FAQ, dan Konsultasi CTA.
5. **ISO Consulting (`/iso-consulting`):** Halaman khusus pendampingan ISO/IEC 27001 (ISMS) dan ISO 9001 (QMS), panduan 7 tahapan konsultasi terstruktur, serta pernyataan transparansi independensi konsultan.
6. **Cybersecurity & IT Governance (`/cybersecurity-governance`):** Kerangka kerja siklus tata kelola (Governance → Risk Assessment → Implementation → Evaluation → Continual Improvement) serta acuan framework internasional (ISO 27001, NIST CSF, CIS Controls).
7. **Solusi Bisnis (`/solutions`):** Solusi berorientasi masalah nyata operasional klien (Transformasi Digital, Modernisasi Infrastruktur, Peningkatan Keamanan, dll.).
8. **Portofolio Konseptual (`/portfolio` & `/portfolio/:id`):** Studi kasus ilustratif metodologi implementasi dengan label kepatuhan kerahasiaan (*Portfolio examples — illustrative concepts*).
9. **Artikel & Edukasi (`/insights` & `/insights/:slug`):** Pusat wawasan dan literasi praktik terbaik teknologi informasi dengan filter kategori, pencarian, dan estimasi waktu baca (*reading time*).
10. **Kontak & Konsultasi (`/contact`):** Formulir pemesanan konsultasi tervalidasi dengan pilihan layanan spesifik, status konfirmasi, instruksi integrasi API backend, serta tombol tautan email client.
11. **Kebijakan Privasi (`/privacy-policy`):** Kebijakan perlindungan data pribadi sesuai UU No. 27 Tahun 2022 (UU PDP).
12. **404 Not Found Page:** Penanganan rute tidak terdaftar dengan tombol kembali ke beranda.

---

## 3. Teknologi yang Digunakan

- **React 19** & **TypeScript**
- **Vite** sebagai build tool & development server
- **Tailwind CSS v4** dengan palet warna korporat:
  - Deep Navy: `#08204C`
  - Corporate Blue: `#0069D2`
  - Electric Cyan: `#00B5CC`
  - Teal: `#009696`
  - Light Background: `#F1F6FB`
- **React Router Dom v7** untuk perutean SPA yang mulus
- **Lucide React** untuk ikonografi bersih
- Tipografi: **Manrope** & **Plus Jakarta Sans**

---

## 4. Instalasi & Menjalankan Proyek

### A. Persyaratan Sistem
- Node.js versi 18+ atau 20+
- npm versi 9+

### B. Menjalankan Development Server
```bash
# Instal dependensi
npm install

# Jalankan dev server pada port 3000
npm run dev
```
Buka browser pada `http://localhost:3000`.

### C. Build Production
```bash
# Memeriksa tipe data TypeScript dan membuat berkas build
npm run build

# Menjalankan preview berkas build produksi
npm run preview
```
Berkas siap saji akan dibuat di dalam folder `dist/`.

---

## 5. Panduan Pemeliharaan & Kustomisasi Konten

Seluruh data konten dipisahkan secara modular di dalam folder `src/data/` agar pengelola website dapat memperbarui teks dan katalog tanpa perlu menyentuh komponen antarmuka:

### Mengubah Data Perusahaan & Legalitas
Edit file: `src/data/company.ts`
- Mengubah alamat, email, visi, misi, atau nilai-nilai inti perusahaan.

### Mengubah Katalog Produk
Edit file: `src/data/products.ts`
- Menambah atau memperbarui item produk, fitur, use cases, manfaat, dan catatan ketersediaan.

### Mengubah Katalog Layanan
Edit file: `src/data/services.ts`
- Menambah layanan baru, mengubah ruang lingkup (*scope*), tahapan kerja (*process*), maupun daftar pertanyaan yang sering diajukan (*FAQ*).

### Mengubah Pendampingan ISO
Edit file: `src/data/iso.ts`
- Menyesuaikan klausul standar mutakhir, tahapan konsultasi, atau pernyataan independensi.

### Mengubah Artikel & Publikasi
Edit file: `src/data/articles.ts`
- Menambah artikel rilis baru, kategori, tanggal terbit, dan konten paragraf.

### Mengubah Logo & Aset Gambar
- File logo resmi tersimpan di: `public/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png`
- Untuk mengganti logo, cukup letakkan file logo baru pada folder `public/assets/` dan perbarui referensi path pada `src/components/layout/Navbar.tsx` dan `src/components/layout/Footer.tsx`.

### Menghubungkan Contact Form ke Backend
Buka file `src/services/contactService.ts`:
- Ganti fungsi simulasi dengan pemanggilan `fetch()` ke webhook CRM Anda, endpoint REST API internal (`/api/contact`), atau penyedia email transactional (seperti Resend, SendGrid, atau Mailgun).

---

## 6. Deployment ke Server Hosting

### Vercel / Netlify / Cloudflare Pages
1. Hubungkan repositori GitHub proyek.
2. Atur **Build Command**: `npm run build`
3. Atur **Output Directory**: `dist`
4. Untuk memastikan Single Page Application (SPA) routing bekerja ketika halaman di-refresh, buat file konfigurasi rewrite (misal `vercel.json` atau `_redirects` dengan aturan `/* -> /index.html 200`).

### Nginx / Server VPS Mandiri
Arahkan `root` konfigurasi Nginx ke folder `dist` dan aktifkan `try_files $uri $uri/ /index.html;`.

---

## 7. Lisensi & Hak Cipta

© Hak Cipta dilindungi oleh **CV Lintas Informatika Buana**. Seluruh konten, merek dagang, dan aset logo merupakan milik sah entitas usaha.
