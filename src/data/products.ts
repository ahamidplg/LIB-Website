import { ProductItem } from '../types';

export const productsCatalogue: ProductItem[] = [
  // A. Software & Digital Solutions
  {
    id: 'business-applications',
    name: 'Business Applications',
    category: 'Software & Digital Solutions',
    shortDesc: 'Aplikasi perangkat lunak dirancang untuk mengotomasi proses operasional, pelaporan, dan pengelolaan data internal organisasi.',
    fullDesc: 'Katalog solusi aplikasi bisnis dirancang untuk mendukung operasional harian perusahaan dengan modularitas tinggi, kontrol hak akses berbasis peran, dan kemudahan integrasi dengan sistem existing.',
    features: [
      'Struktur arsitektur modular sesuai alur kerja korporat',
      'Manajemen hak akses pengguna terpusat (Role-Based Access Control)',
      'Dashboard monitoring performa dan pelaporan terpadu',
      'Dukungan ekspor data dan audit trail aktivitas'
    ],
    useCases: [
      'Otomasi alur persetujuan (approval workflow) multi-tingkat',
      'Pusat kendali operasional divisi korporat',
      'Sentralisasi data pencatatan dan log operasional'
    ],
    benefits: [
      'Mengurangi beban manual dan redundansi data',
      'Meningkatkan akurasi dan kecepatan pelaporan manajemen',
      'Struktur kode yang mudah disesuaikan dengan regulasi internal'
    ],
    statusNote: 'Katalog usulan solusi — Silakan hubungi tim LIB untuk konsultasi spesifikasi teknis dan perancangan sistem sesuai kebutuhan organisasi Anda.'
  },
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    category: 'Software & Digital Solutions',
    shortDesc: 'Layanan rekayasa perangkat lunak tailored-made yang dibangun dari nol sesuai kebutuhan unik dan proses bisnis khusus klien.',
    fullDesc: 'Pengembangan perangkat lunak kustom dengan siklus pengembangan terstruktur: pengumpulan kebutuhan, perancangan arsitektur, implementasi kode berbasis standar industri, hingga pengujian keamanan dan fungsional.',
    features: [
      'Analisis proses bisnis dan rancang bangun arsitektur spesifik',
      'Pengembangan frontend responsif dan backend scalable',
      'Implementasi API aman dengan autentikasi modern',
      'Dokumentasi teknis lengkap dan repositori terkelola'
    ],
    useCases: [
      'Sistem informasi spesifik sektor industri (keuangan, logistik, manufaktur)',
      'Modernisasi aplikasi legacy ke teknologi cloud-ready',
      'Portal mitra dan layanan internal khusus'
    ],
    benefits: [
      'Kepemilikan penuh terhadap arsitektur dan penyesuaian fungsional',
      'Tidak terkendala batasan lisensi aplikasi pihak ketiga',
      'Skalabilitas jangka panjang yang dapat ditingkatkan secara fleksibel'
    ],
    statusNote: 'Katalog usulan solusi — Pendekatan konsultatif berbasis analisis kebutuhan spesifik organisasi.'
  },
  {
    id: 'web-applications',
    name: 'Web Applications',
    category: 'Software & Digital Solutions',
    shortDesc: 'Aplikasi berbasis web modern dengan akses multi-platform yang aman, performa tinggi, dan pengalaman pengguna intuitif.',
    fullDesc: 'Pengembangan web application yang mengutamakan kecepatan muat, standar keamanan data web (OWASP compliance baseline), dan kompatibilitas lintas peramban untuk pengguna desktop maupun mobile.',
    features: [
      'Single Page Application (SPA) / Progressive Web Application (PWA)',
      'Desain antarmuka responsif dan aksesibilitas tinggi',
      'Enkripsi komunikasi data (HTTPS/TLS) terstandarisasi',
      'Manajemen session aman dan proteksi input formulir'
    ],
    useCases: [
      'Portal layanan publik dan institusi',
      'Sistem inventaris dan pelacakan aset internal',
      'Dashboard analitik eksekutif real-time'
    ],
    benefits: [
      'Dapat diakses langsung melalui browser tanpa instalasi tambahan',
      'Pembaruan sistem terpusat di server',
      'Kemudahan pemeliharaan dan efisiensi biaya distribusi'
    ],
    statusNote: 'Katalog usulan solusi — Hubungi tim LIB untuk mendiskusikan lingkup modul dan arsitektur web.'
  },
  {
    id: 'database-solutions',
    name: 'Database Solutions',
    category: 'Software & Digital Solutions',
    shortDesc: 'Perancangan struktur data, normalisasi basis data, manajemen performa query, dan strategi retensi data korporat.',
    fullDesc: 'Solusi basis data relasional maupun NoSQL yang dirancang dengan integritas data tinggi, replikasi untuk kontinuitas bisnis, serta mekanisme pencadangan (backup) dan pemulihan (disaster recovery).',
    features: [
      'Desain skema dan normalisasi basis data berkinerja tinggi',
      'Optimasi indexing dan penanganan kueri skala besar',
      'Strategi failover, replikasi, dan penjadwalan pencadangan rutin',
      'Keamanan tingkat baris (Row-Level Security) dan enkripsi data at-rest'
    ],
    useCases: [
      'Sentralisasi basis data multi-cabang korporat',
      'Migrasi basis data antar-platform atau ke cloud',
      'Penataan ulang basis data yang mengalami bottleneck performa'
    ],
    benefits: [
      'Menjamin integritas dan ketersediaan data bisnis kritis',
      'Mempercepat waktu respon kueri operasional',
      'Kesiapan pemulihan data saat insiden tak terduga'
    ],
    statusNote: 'Katalog usulan solusi — Konsultasikan konfigurasi basis data Anda bersama konsultan kami.'
  },
  {
    id: 'workflow-digitization',
    name: 'Workflow Digitization',
    category: 'Software & Digital Solutions',
    shortDesc: 'Transformasi alur kerja manual berbasis kertas menjadi alur digital terstruktur dengan jejak audit yang akurat.',
    fullDesc: 'Mengubah proses birokrasi manual, formulir kertas, dan persetujuan fisik menjadi sistem digital yang cepat, terpantau, dan dapat diverifikasi validitasnya.',
    features: [
      'Pemodelan alur kerja dinamis (state-machine based)',
      'Penandatanganan dan persetujuan elektronik terverifikasi',
      'Notifikasi otomatis via email dan pesan sistem',
      'Audit log riwayat perubahan status dokumen'
    ],
    useCases: [
      'Digitalisasi proses pengadaan barang dan memo dinas',
      'Pengajuan izin, cuti, dan persetujuan operasional',
      'Pencatatan kepatuhan mutu harian'
    ],
    benefits: [
      'Menghilangkan risiko kehilangan berkas fisik',
      'Mempercepat siklus persetujuan dari hari menjadi hitungan menit',
      'Transparansi penuh status berkas pada setiap tahap'
    ],
    statusNote: 'Katalog usulan solusi — Diskusikan alur dokumen organisasi Anda untuk simulasi digitalisasi.'
  },

  // B. IT Infrastructure
  {
    id: 'computer-server-equipment',
    name: 'Computer & Server Equipment',
    category: 'IT Infrastructure',
    shortDesc: 'Dukungan perencanaan pengadaan dan integrasi perangkat komputer kerja serta unit server enterprise.',
    fullDesc: 'Pendampingan spesifikasi teknis dan pengadaan perangkat keras komputasi workstation, server rackmount, dan storage array yang diselaraskan dengan beban kerja operasional perusahaan.',
    features: [
      'Penyusunan dokumen spesifikasi teknis (Tor/KAK) objektif',
      'Evaluasi kompatibilitas kapasitas CPU, RAM, dan storage',
      'Pendampingan instalasi sistem operasi server dan hypervisor',
      'Uji stabilitas dan commissioning perangkat baru'
    ],
    useCases: [
      'Pembaruan workstation kantor cabang dan kantor pusat',
      'Penyediaan unit host server untuk virtualisasi internal',
      'Pembangunan server cadangan (redundant server)'
    ],
    benefits: [
      'Mencegah kesalahan spesifikasi pengadaan yang tidak kompatibel',
      'Efisiensi alokasi anggaran investasi teknologi',
      'Kesiapan integrasi langsung ke jaringan korporat'
    ],
    statusNote: 'Katalog usulan pengadaan & integrasi — Tidak mengklaim distributor resmi merek tertentu. Pengadaan disesuaikan kebutuhan klien.'
  },
  {
    id: 'network-equipment',
    name: 'Network Equipment',
    category: 'IT Infrastructure',
    shortDesc: 'Perencanaan pengadaan router, managed switch, access point, dan firewall untuk jaringan korporat stabil.',
    fullDesc: 'Solusi perangkat jaringan yang mencakup segmentasi VLAN, routing antar-cabang, manajemen bandwidth, dan kontrol keamanan akses fisik maupun nirkabel.',
    features: [
      'Desain topologi jaringan lokal (LAN) dan Wide Area Network (WAN)',
      'Konfigurasi Managed Switch Layer 2/Layer 3 dan VLAN',
      'Implementasi Wi-Fi Enterprise dengan enkripsi WPA3/Enterprise',
      'Pengaturan perangkat firewall dan VPN gateway'
    ],
    useCases: [
      'Pemasangan infrastruktur jaringan gedung kantor baru',
      'Segmentasi jaringan tamu (guest network) dari jaringan server privat',
      'Konektivitas VPN antar kantor cabang dan kantor pusat'
    ],
    benefits: [
      'Stabilitas koneksi jaringan internal dan internet',
      'Pemisahan trafik data sensitif untuk keamanan informasi',
      'Monitoring pemanfaatan bandwidth yang terukur'
    ],
    statusNote: 'Katalog usulan pengadaan & konfigurasi — Silakan kontak kami untuk asesmen jaringan.'
  },
  {
    id: 'infrastructure-components',
    name: 'Infrastructure Components',
    category: 'IT Infrastructure',
    shortDesc: 'Komponen pendukung ruang server seperti uninterruptible power supply (UPS), rack server, dan sistem pengkabelan terstruktur.',
    fullDesc: 'Kelengkapan fasilitas fisik pendukung infrastruktur TI guna menjamin keandalan catu daya, sirkulasi udara, kerapian kabel, dan keamanan fisik ruang perangkat.',
    features: [
      'Perencanaan kapasitas Uninterruptible Power Supply (UPS)',
      'Penataan rak server (server rack cable management & PDU)',
      'Sistem pengkabelan terstruktur Cat6/Cat6A & Fiber Optic',
      'Standar labelisasi kabel dan dokumentasi patching'
    ],
    useCases: [
      'Standarisasi ruang server (server room cleanup & organizing)',
      'Proteksi perangkat kritis dari fluktuasi lonjakan daya listrik',
      'Pemasangan patch panel dan konektivitas backbone gedung'
    ],
    benefits: [
      'Mencegah downtime mendadak akibat gangguan listrik',
      'Mempermudah troubleshooting jaringan dengan kabel yang rapi dan terlabel',
      'Mendukung kepatuhan audit fisik ruang data'
    ],
    statusNote: 'Katalog usulan komponen — Hubungi kami untuk survei dan perencanaan instalasi.'
  },
  {
    id: 'hardware-software-procurement',
    name: 'Hardware & Software Procurement',
    category: 'IT Infrastructure',
    shortDesc: 'Pendampingan pengadaan perangkat keras dan lisensi perangkat lunak sesuai dengan tata kelola legalitas dan anggaran.',
    fullDesc: 'Layanan konsultatif pengadaan yang membantu instansi dan korporasi menyusun daftar kebutuhan barang, evaluasi vendor, verifikasi keaslian lisensi, dan pemenuhan regulasi belanja TI.',
    features: [
      'Penyusunan Rencana Kebutuhan Barang TI (RKBI)',
      'Analisis Total Cost of Ownership (TCO) perangkat dan lisensi',
      'Verifikasi kepatuhan lisensi perangkat lunak (License Compliance)',
      'Pendampingan proses acceptance test dan serah terima teknis'
    ],
    useCases: [
      'Audit legalitas lisensi software perkantoran dan OS',
      'Pengadaan massal perangkat TI untuk institusi pendidikan / korporasi',
      'Pembaruan kontrak support perangkat kritis tahunan'
    ],
    benefits: [
      'Menghindari risiko hukum pelanggaran hak cipta perangkat lunak',
      'Optimalisasi belanja investasi teknologi yang transparan',
      'Jaminan kesesuaian barang dengan kebutuhan riil operasional'
    ],
    statusNote: 'Layanan konsultasi pengadaan — Menjunjung tinggi transparansi dan tata kelola pengadaan yang bersih.'
  },
  {
    id: 'system-integration-components',
    name: 'System Integration Components',
    category: 'IT Infrastructure',
    shortDesc: 'Perangkat dan modul penghubung untuk menyatukan perangkat IoT, sensor, absensi, dan sistem kontrol fisik ke sistem pusat.',
    fullDesc: 'Komponen integrasi perantara (hardware bridge, converter serial-to-ethernet, dan middleware controller) untuk menjembatani perangkat lapangan dengan sistem informasi berbasis cloud atau on-premise.',
    features: [
      'Integrasi mesin absensi biometrik ke sistem HRMS',
      'Konektivitas controller akses pintu gedung ke sistem otorisasi',
      'Converter interface komunikasi industri (RS485, Modbus, IP)',
      'Penyusunan middleware pertukaran sinyal data secara aman'
    ],
    useCases: [
      'Sistem absensi dan monitoring kehadiran pegawai terpusat',
      'Kontrol akses fisik ruang server berbasis kartu RFID / biometrik',
      'Integrasi sensor lingkungan ruang data ke dashboard peringatan'
    ],
    benefits: [
      'Otomatisasi pengumpulan data dari perangkat fisik',
      'Pengurangan input data ganda secara manual',
      'Pencatatan waktu nyata (real-time recording) yang reliabel'
    ],
    statusNote: 'Katalog usulan integrasi perangkat fisik — Diskusikan jenis perangkat yang ingin diintegrasikan.'
  },

  // C. Technology Solutions
  {
    id: 'digital-platform-solutions',
    name: 'Digital Platform Solutions',
    category: 'Technology Solutions',
    shortDesc: 'Arsitektur platform digital yang menyatukan berbagai layanan dan kanal interaksi dalam satu ekosistem terpadu.',
    fullDesc: 'Pengembangan fondasi platform digital untuk organisasi yang ingin menyatukan interaksi pelanggan, mitra, dan tim internal melalui arsitektur layanan mikro atau monolitik modular yang tangguh.',
    features: [
      'Desain arsitektur berbasis API-first',
      'Manajemen identitas terpadu (Single Sign-On / SSO)',
      'Dukungan multi-tenant dan skalabilitas horizontal',
      'Monitoring kesehatan layanan (health checks & metrics)'
    ],
    useCases: [
      'Platform kolaborasi antar-instansi atau unit bisnis',
      'Ekosistem layanan terpadu satu pintu (one-stop service portal)',
      'Pusat distribusi informasi dan repositori data perusahaan'
    ],
    benefits: [
      'Mempercepat peluncuran fitur baru ke pasar',
      'Konsistensi pengalaman pengguna lintas divisi',
      'Tata kelola arsitektur teknologi yang terpusat dan rapi'
    ],
    statusNote: 'Katalog usulan arsitektur solusi — Konsultasikan roadmap platform digital Anda.'
  },
  {
    id: 'application-integration',
    name: 'Application Integration',
    category: 'Technology Solutions',
    shortDesc: 'Penyambungan antar aplikasi independen menggunakan API, webhooks, dan middleware pertukaran data otomatis.',
    fullDesc: 'Menghilangkan silo data dengan menghubungkan aplikasi akuntansi, CRM, ERP, atau sistem legacy agar dapat saling berkomunikasi secara real-time atau terjadwal tanpa input manual berulang.',
    features: [
      'Pembangunan custom RESTful API & WebSocket',
      'Implementasi mekanisme otorisasi OAuth2 & API Key secure rotation',
      'Transformasi dan validasi format data (JSON, XML, CSV)',
      'Antrian pesan (Message queue) dengan mekanisme retry otomatis'
    ],
    useCases: [
      'Sinkronisasi otomatis data transaksi ke sistem pembukuan',
      'Integrasi sistem reservasi dengan notifikasi WhatsApp gateway resmi',
      'Penghubungan data absensi lapangan dengan modul payroll'
    ],
    benefits: [
      'Meniadakan kesalahan entri data manual antar aplikasi',
      'Mempercepat sinkronisasi data antar unit kerja',
      'Memaksimalkan utilisasi sistem yang sudah ada'
    ],
    statusNote: 'Katalog usulan integrasi — Hubungi kami untuk asesmen protokol dan format data sistem Anda.'
  },
  {
    id: 'it-operations-support',
    name: 'IT Operations Support',
    category: 'Technology Solutions',
    shortDesc: 'Dukungan pemeliharaan berkala, troubleshooting insiden sistem, dan pendampingan operasional TI harian.',
    fullDesc: 'Paket dukungan pemeliharaan teknis preventif dan korektif untuk memastikan seluruh sistem TI, server, dan jaringan beroperasi normal sesuai Service Level Agreement (SLA) yang disepakati.',
    features: [
      'Pemeriksaan rutin kesehatan server dan kapasitas penyimpanan',
      'Penerapan patch keamanan sistem operasi dan dependensi',
      'Bantuan penanganan insiden teknis (Level 2 & Level 3 support)',
      'Laporan bulanan stabilitas sistem dan rekomendasi peningkatan'
    ],
    useCases: [
      'Pendampingan tim internal TI yang memiliki keterbatasan resource',
      'Pemeliharaan preventif server produksi di luar jam kerja',
      'Audit log insiden dan penyusunan langkah mitigasi berulang'
    ],
    benefits: [
      'Meminimalkan risiko downtime yang mengganggu operasional',
      'Menjaga sistem selalu ter-update dengan patch keamanan terbaru',
      'Ketenangan operasional bagi pimpinan manajemen'
    ],
    statusNote: 'Layanan dukungan operasional — Disusun dengan kontrak kerja sama dan parameter SLA yang jelas.'
  },
  {
    id: 'technology-consulting',
    name: 'Technology Consulting',
    category: 'Technology Solutions',
    shortDesc: 'Konsultasi strategis pemilihan teknologi, kelayakan arsitektur, dan mitigasi risiko investasi digital.',
    fullDesc: 'Bimbingan independen bagi pengambil keputusan perusahaan sebelum melakukan investasi besar di bidang teknologi informasi, mencakup studi kelayakan teknis, analisis kebutuhan, dan mitigasi risiko kegagalan.',
    features: [
      'Studi kelayakan teknis (Proof of Concept / Feasibility Study)',
      'Review arsitektur sistem dan kesiapan integrasi',
      'Penyusunan kerangka acuan kerja pengadaan solusi teknologi',
      'Asesmen risiko ketergantungan teknologi (vendor lock-in assessment)'
    ],
    useCases: [
      'Perencanaan migrasi sistem legacy ke teknologi modern',
      'Pendampingan due-diligence teknologi sebelum akuisisi/implementasi',
      'Evaluasi penawaran teknis dari vendor pihak ketiga'
    ],
    benefits: [
      'Memberikan sudut pandang objektif bebas dari bias produk tertentu',
      'Melindungi investasi perusahaan dari kegagalan implementasi software',
      'Memastikan keputusan teknologi selaras dengan strategi bisnis'
    ],
    statusNote: 'Layanan konsultasi independen — Pendekatan profesional dan berorientasi nilai jangka panjang.'
  }
];
