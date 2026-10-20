import { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'digital-transformation',
    category: 'Transformasi Bisnis',
    title: 'Digital Transformation for Growing Enterprises',
    tagline: 'Modernisasi alur kerja konvensional menjadi ekosistem digital yang tangkas dan efisien.',
    clientChallenge: 'Banyak organisasi menghadapi hambatan birokrasi akibat dokumen fisik, pencatatan ganda pada spreadsheet manual, dan lambatnya respon operasional terhadap kebutuhan pasar.',
    solutionApproach: 'LIB menggunakan pendekatan terstruktur berbasis analisis proses bisnis (value-stream mapping), merancang arsitektur aplikasi modular, dan memandu tim Anda dalam migrasi budaya kerja digital.',
    scopeOfWork: [
      'Pemetaan dan eliminasi langkah-langkah kerja yang tidak bernilai tambah',
      'Pengembangan portal web dan modul otomasi alur kerja (workflow)',
      'Sentralisasi repositori data operasional berbasis hak akses',
      'Pelatihan dan pendampingan adopsi pengguna secara bertahap'
    ],
    targetedOutcomes: [
      'Pemangkasan waktu siklus pemrosesan berkas hingga lebih dari 60%',
      'Eliminasi risiko kehilangan dokumen penting perusahaan',
      'Visibilitas status proses kerja secara real-time bagi para pemangku kepentingan'
    ]
  },
  {
    id: 'infrastructure-modernization',
    category: 'Infrastruktur TI',
    title: 'IT Infrastructure Modernization',
    tagline: 'Peningkatan ketahanan, skalabilitas, dan efisiensi ruang server serta jaringan kantor.',
    clientChallenge: 'Infrastruktur server dan jaringan lama sering mengalami gangguan, overheat, kabel semrawut, atau kapasitas penuh yang menghambat kelancaran operasional.',
    solutionApproach: 'Kami merancang arsitektur infrastruktur baru dengan kalkulasi beban terukur, penataan rack kabel terstandar, segmentasi keamanan jaringan, dan platform virtualisasi modern.',
    scopeOfWork: [
      'Asesmen kapasitas perangkat keras dan kelistrikan ruang server',
      'Peremajaan topologi jaringan dengan Managed Switch & VLAN terisolasi',
      'Implementasi virtualisasi server untuk optimalisasi pemanfaatan resource fisik',
      'Penyusunan jadwal backup otomatis dan prosedur pemulihan bencana'
    ],
    targetedOutcomes: [
      'Peningkatan stabilitas uptime jaringan dan layanan server',
      'Pemisahan trafik data sensitif internal dari jaringan umum',
      'Pengurangan biaya pengadaan hardware baru melalui efisiensi virtualisasi'
    ]
  },
  {
    id: 'security-improvement',
    category: 'Cybersecurity',
    title: 'Information Security Posture Improvement',
    tagline: 'Membangun pertahanan siber berlapis untuk melindungi aset data rahasia organisasi.',
    clientChallenge: 'Meningkatnya ancaman peretasan, ransomware, kebocoran data, dan ketidakpastian apakah sistem internal memiliki celah keamanan yang rentan.',
    solutionApproach: 'Melalui pendekatan Defence-in-Depth, kami mengidentifikasi titik rawan sistem, menyusun tata kelola kebijakan keamanan, serta melakukan hardening konfigurasi teknis.',
    scopeOfWork: [
      'Asesmen kerentanan teknis dan review konfigurasi keamanan sistem',
      'Penyusunan Kebijakan Keamanan Informasi dan Standar Prosedur Penggunaan Fasilitas TI',
      'Penerapan autentikasi multi-faktor dan segmentasi firewall perimeter',
      'Penyusunan rencana mitigasi dan penanganan insiden darurat'
    ],
    targetedOutcomes: [
      'Tutupnya celah konfigurasi kritis yang berpotensi dimanfaatkan pihak luar',
      'Kesiapan personil internal dalam mendeteksi dan merespon indikasi ancaman',
      'Dokumentasi kepatuhan keamanan yang siap untuk audit'
    ]
  },
  {
    id: 'iso-readiness',
    category: 'ISO & Compliance',
    title: 'ISO Management System Readiness (ISO 27001 & 9001)',
    tagline: 'Pendampingan terarah menuju kepatuhan sistem manajemen berstandar internasional.',
    clientChallenge: 'Organisasi membutuhkan sertifikasi ISO untuk memenuhi persyaratan tender, regulasi pemerintah, atau kepercayaan investor, namun bingung harus mulai dari mana dan khawatir birokrasi berlebihan.',
    solutionApproach: 'LIB mendampingi tim Anda melalui 7 tahap konsultasi terstruktur, membedah kesenjangan (gap), menyusun dokumen praktis yang tidak berbelit, hingga simulasi audit internal.',
    scopeOfWork: [
      'Gap Assessment menyeluruh terhadap persyaratan klausul standar',
      'Penyusunan dokumen sistem manajemen (kebijakan, SOP, manual, formulir)',
      'Pelaksanaan risk assessment dan penyusunan Statement of Applicability (SoA)',
      'Pelatihan tim dan pendampingan audit internal sebelum audit sertifikasi independen'
    ],
    targetedOutcomes: [
      'Terdokumentasinya seluruh proses kerja sesuai kaidah standar internasional',
      'Kesiapan penuh seluruh personil dalam menghadapi auditor sertifikasi eksternal',
      'Peningkatan kredibilitas organisasi di mata mitra bisnis dan regulator'
    ]
  },
  {
    id: 'business-applications-dev',
    category: 'Software Engineering',
    title: 'Custom Business Application Engineering',
    tagline: 'Aplikasi perangkat lunak dirancang khusus sesuai logika bisnis dan skala operasional Anda.',
    clientChallenge: 'Sistem aplikasi "off-the-shelf" yang kaku dan membebankan biaya lisensi per user yang mahal seringkali tidak memfasilitasi keunikan proses operasional perusahaan.',
    solutionApproach: 'Kami membangun perangkat lunak tailored-fit dengan kepemilikan penuh, arsitektur berbasis API yang fleksibel, dan antarmuka modern yang nyaman dipakai oleh staf.',
    scopeOfWork: [
      'Penggalian mendalam spesifikasi kebutuhan bisnis dan logika proses',
      'Desain antarmuka interaktif yang mudah dipahami (user-friendly)',
      'Pengembangan modul aplikasi dengan basis data relasional yang kokoh',
      'Uji fungsional menyeluruh, pelatihan pengguna, dan serah terima source code'
    ],
    targetedOutcomes: [
      'Solusi perangkat lunak yang 100% selaras dengan alur kerja organisasi',
      'Bebas biaya lisensi per-pengguna jangka panjang',
      'Kemudahan penambahan modul fitur di masa depan seiring pertumbuhan usaha'
    ]
  },
  {
    id: 'system-integration-solution',
    category: 'Integrasi Sistem',
    title: 'Enterprise System Integration',
    tagline: 'Menghilangkan silo informasi dengan menyatukan aplikasi dan data operasional yang terpisah.',
    clientChallenge: 'Data operasional terfragmentasi di berbagai aplikasi berbeda (ERP, absensi, CRM, database akuntansi) sehingga staf harus melakukan salin-tempel data manual yang rawan keliru.',
    solutionApproach: 'Membangun jembatan komunikasi data otomatis (middleware / API connectors) yang aman, cepat, dan dilengkapi mekanisme monitoring transaksi terpusat.',
    scopeOfWork: [
      'Pemetaan skema data dan protokol komunikasi tiap aplikasi',
      'Pembangunan RESTful API, webhook receiver, atau secure middleware connector',
      'Penerapan validasi format data otomatis dan protokol enkripsi transit',
      'Dashboard monitoring transaksi integrasi dan penanganan kegagalan otomatis'
    ],
    targetedOutcomes: [
      'Otomatisasi pertukaran data antar sistem secara instan dan akurat',
      'Meniadakan kesalahan input ganda oleh staf operasional',
      'Konsistensi data tunggal (single source of truth) untuk pelaporan manajemen'
    ]
  }
];
