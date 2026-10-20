import { ArticleItem } from '../types';

export const articleNotice = {
  label: 'Contoh Konten Edukasi & Publikasi',
  description: 'Artikel di bawah ini merupakan materi referensi edukatif dan konseptual seputar praktik terbaik teknologi dan tata kelola informasi. Konten dapat diganti atau diperbarui sebelum rilis publikasi berkala.',
};

export const articlesData: ArticleItem[] = [
  {
    id: '1',
    slug: 'fondasi-iso-27001-bagi-perusahaan-berkembang',
    title: 'Membangun Fondasi Sistem Manajemen Keamanan Informasi (ISO/IEC 27001) untuk Bisnis Berkembang',
    category: 'ISO 27001',
    date: '15 Oktober 2026',
    readTime: '6 min baca',
    isSampleContent: true,
    author: 'Tim Konsultan LIB',
    excerpt: 'Mengapa keamanan informasi bukan lagi sekadar urusan departemen TI, melainkan pilar penting tata kelola korporat yang melindungi reputasi dan kontinuitas bisnis.',
    content: [
      'Di era digital saat ini, aset informasi telah menjadi salah satu modal kerja terpenting bagi setiap organisasi. Dari data nasabah, formula bisnis, hingga catatan keuangan rahasia, seluruh informasi tersebut disimpan dan diproses melalui sistem komputasi.',
      'Banyak pimpinan organisasi skala menengah masih beranggapan bahwa penerapan standar internasional seperti ISO/IEC 27001 adalah sesuatu yang terlalu rumit dan hanya relevan untuk korporasi multinasional raksasa. Namun kenyataannya, insiden kebocoran data dan ancaman siber tidak pernah memandang ukuran perusahaan.',
      'Pendekatan penerapan ISO/IEC 27001 sejatinya berpijak pada prinsip proporsionalitas. Sistem manajemen dirancang mengikuti konteks nyata dan tingkat risiko masing-masing organisasi. Tahapan mendasar diawali dengan inventarisasi aset kritis, identifikasi potensi kerentanan, dan perumusan kebijakan yang realistis untuk dilaksanakan.',
      'Dengan menetapkan kontrol keamanan yang terstruktur, organisasi tidak hanya memitigasi risiko hukum dan sanksi kebocoran data, namun juga meningkatkan kepercayaan di mata klien, calon investor, dan regulator.'
    ]
  },
  {
    id: '2',
    slug: 'perbedaan-kebijakan-keamanan-dan-sop-teknis',
    title: 'Membedah Hierarki Dokumen: Perbedaan Kebijakan Keamanan, Standar, dan Prosedur Operasional (SOP)',
    category: 'IT Governance',
    date: '08 Oktober 2026',
    readTime: '5 min baca',
    isSampleContent: true,
    author: 'Tim Tata Kelola TI LIB',
    excerpt: 'Seringkali tim operasional bingung membedakan antara kebijakan strategis manajemen dan instruksi kerja teknis. Berikut panduan menyusun dokumentasi tata kelola yang teratur.',
    content: [
      'Salah satu temuan paling umum dalam audit tata kelola TI adalah ketidakjelasan hierarki dokumentasi. Sering ditemukan sebuah dokumen berlabel "Kebijakan" namun di dalamnya memuat langkah detail mengklik tombol tertentu, atau sebaliknya, dokumen berlabel "SOP" yang hanya berisi pernyataan filosofis pimpinan tanpa alur kerja yang jelas.',
      'Hierarki dokumentasi yang baik membagi dokumen ke dalam beberapa tingkat: Kebijakan (Policy) yang memuat arahan prinsip dari manajemen eksekutif, Standar (Standards) yang memuat batasan teknis minimum, Prosedur (SOP) yang menguraikan siapa melakukan apa dan kapan, serta Rekam Bukti (Records) sebagai bukti pelaksanaan.',
      'Memisahkan tingkatan ini sangat penting agar saat terjadi pembaruan teknologi, organisasi tidak perlu merombak seluruh dokumen kebijakan induk yang memerlukan tanda tangan direksi.'
    ]
  },
  {
    id: '3',
    slug: 'prinsip-keamanan-berlapis-defense-in-depth',
    title: 'Konsep Defense-in-Depth: Mengapa Antivirus dan Firewall Saja Tidak Lagi Cukup',
    category: 'Cybersecurity',
    date: '28 September 2026',
    readTime: '7 min baca',
    isSampleContent: true,
    author: 'Tim Cybersecurity LIB',
    excerpt: 'Ancaman rekayasa sosial dan ransomware menuntut strategi pertahanan siber berlapis yang mengombinasikan kesadaran manusia, kontrol akses, dan pemantauan sistem.',
    content: [
      'Anggapan bahwa memasang firewall di gerbang jaringan dan menginstal program antivirus pada laptop staf sudah menjamin keamanan 100% adalah mitos lama yang berbahaya.',
      'Serangan siber modern mayoritas masuk melalui manipulasi psikologis manusia (phishing) atau memanfaatkan celah konfigurasi yang tidak disengaja. Konsep Defense-in-Depth mengajarkan bahwa pertahanan harus dibangun secara berlapis: lapisan fisik, lapisan jaringan, lapisan sistem operasi, lapisan aplikasi, lapisan data, dan lapisan terluar yaitu kesadaran pengguna.',
      'Jika satu lapisan berhasil ditembus oleh penyerang, lapisan berikutnya harus mampu menahan atau setidaknya membunyikan peringatan dini sebelum data berharga tereksfiltrasi.'
    ]
  },
  {
    id: '4',
    slug: 'merancang-arsitektur-aplikasi-web-modular',
    title: 'Strategi Merancang Arsitektur Aplikasi Web Bisnis yang Siap Berkembang',
    category: 'Software & Digital Transformation',
    date: '19 September 2026',
    readTime: '6 min baca',
    isSampleContent: true,
    author: 'Tim Rekayasa Perangkat Lunak LIB',
    excerpt: 'Bagaimana memilih pendekatan arsitektur yang seimbang antara kemudahan pemeliharaan awal dan fleksibilitas penambahan fitur operasional jangka panjang.',
    content: [
      'Dalam pengembangan perangkat lunak korporat, godaan untuk menggunakan arsitektur yang terlalu kompleks (seperti microservices pada tim skala kecil) sering kali berujung pada tingginya biaya pemeliharaan dan keterlambatan rilis.',
      'Pendekatan monolit modular yang dirancang dengan batasan domain yang rapi, pemisahan lapisan logika bisnis dan akses basis data, serta antarmuka API yang terstandar sering menjadi solusi paling pragmatis dan tangguh bagi sebagian besar sistem bisnis.',
      'Kunci utamanya adalah disiplin dalam penulisan tipe data (strict typing), manajemen state yang terprediksi, dan pemisahan modul yang memungkinkan migrasi bertahap saat beban transaksi meningkat di kemudian hari.'
    ]
  },
  {
    id: '5',
    slug: 'mengapa-iso-9001-penting-untuk-efisiensi-organisasi',
    title: 'ISO 9001 Bukan Sekadar Sertifikat di Dinding: Menjadikannya Penggerak Efisiensi Kerja',
    category: 'ISO 9001',
    date: '11 September 2026',
    readTime: '5 min baca',
    isSampleContent: true,
    author: 'Tim Konsultan Mutu LIB',
    excerpt: 'Mengubah pandangan lama bahwa sistem manajemen mutu adalah tumpukan berkas yang membebani menjadi alat ukur perbaikan berkelanjutan.',
    content: [
      'Banyak staf mengeluh ketika perusahaan memutuskan untuk menerapkan ISO 9001 karena membayangkan beban pekerjaan mereka akan bertambah dengan tumpukan formulir pengawasan.',
      'Padahal esensi utama dari standar mutu modern adalah efisiensi: memastikan proses bisnis memiliki input yang jelas, alur pengerjaan yang terstandardisasi, dan output yang konsisten. Dengan alur yang baku, waktu yang sebelumnya terbuang untuk memperbaiki kesalahan kerja berulang (rework) dapat ditekan drastis.',
      'Sistem manajemen mutu yang baik justru menyederhanakan alur birokrasi, bukan menambah kerumitan yang tidak perlu.'
    ]
  },
  {
    id: '6',
    slug: 'praktik-terbaik-manajemen-kabel-dan-suhu-ruang-server',
    title: 'Praktik Terbaik Penataan Pengkabelan Terstruktur dan Tata Udara Ruang Server',
    category: 'IT Infrastructure',
    date: '02 September 2026',
    readTime: '5 min baca',
    isSampleContent: true,
    author: 'Tim Infrastruktur LIB',
    excerpt: 'Faktor fisik lingkungan ruang server sering diabaikan, padahal temperatur dan kerapian jalur kabel berpengaruh langsung terhadap masa pakai perangkat keras.',
    content: [
      'Kerapian pengkabelan (structured cabling) di dalam rak server bukan sekadar masalah estetika, melainkan syarat mutlak untuk sirkulasi aliran udara (airflow) yang efisien.',
      'Kabel yang semrawut di belakang server rackmount dapat menghalangi pembuangan udara panas, memicu peningkatan temperatur kerja prosesor, dan berujung pada perlambatan performa (thermal throttling) atau bahkan kerusakan permanen pada motherboard server.',
      'Standarisasi labelisasi kabel di kedua ujung dan pembagian rute kabel daya listrik dengan kabel data jaringan juga memangkas waktu troubleshooting teknisi saat terjadi insiden koneksi terputus.'
    ]
  }
];
