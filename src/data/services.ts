import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // A. IT Consulting & Governance
  {
    id: 'it-strategy-advisory',
    category: 'IT Consulting & Governance',
    title: 'IT Strategy & Technology Advisory',
    shortDesc: 'Penyelarasan rencana investasi dan arsitektur teknologi dengan target pertumbuhan jangka panjang bisnis.',
    overview: 'Layanan konsultasi strategis untuk membantu pimpinan organisasi merumuskan arah pengembangan teknologi yang selaras dengan tujuan bisnis, menghindari inefisiensi belanja TI, serta mengidentifikasi prioritas inisiatif digital.',
    businessChallenges: [
      'Inisiatif TI berjalan sendiri tanpa korelasi langsung dengan strategi pertumbuhan perusahaan.',
      'Alokasi anggaran teknologi yang tidak terukur efektivitas dan pengembalian investasinya.',
      'Kesulitan dalam memilih teknologi yang tepat di tengah arus tren pasar yang cepat berubah.'
    ],
    scope: [
      'Evaluasi lanskap kapabilitas TI eksisting organisasi',
      'Penyelarasan sasaran bisnis dengan kapabilitas teknologi pendukung',
      'Penyusunan prinsip dasar arsitektur teknologi korporat',
      'Identifikasi gap kompetensi dan kebutuhan sumber daya TI'
    ],
    engagementProcess: [
      { step: 1, title: 'Inisiasi & Wawancara Pemangku Kepentingan', description: 'Memahami visi bisnis, model operasional, dan ekspektasi pimpinan eksekutif.' },
      { step: 2, title: 'Asesmen Kondisi Eksisting (As-Is)', description: 'Pemetaan portofolio aplikasi, infrastruktur, struktur tim, dan alur data saat ini.' },
      { step: 3, title: 'Perumusan Target Masa Depan (To-Be)', description: 'Menyusun arsitektur sasaran dan target kapabilitas yang dibutuhkan bisnis.' },
      { step: 4, title: 'Penyusunan Dokumen Strategi & Rekomendasi', description: 'Menghasilkan panduan strategi TI formal dan presentasi eksekutif.' }
    ],
    expectedDeliverables: [
      'Laporan Evaluasi Kondisi Eksisting TI (As-Is Assessment)',
      'Dokumen Cetak Biru Strategi TI (IT Strategic Blueprint)',
      'Matriks Prioritas Inisiatif Teknologi & Rekomendasi Anggaran'
    ],
    faqs: [
      {
        question: 'Berapa lama durasi konsultasi strategi TI biasanya berlangsung?',
        answer: 'Durasi konsultasi berkisar antara 4 hingga 8 minggu tergantung skala organisasi, jumlah unit bisnis, dan kompleksitas sistem yang dievaluasi.'
      },
      {
        question: 'Apakah layanan ini mencakup implementasi teknis perangkat lunak?',
        answer: 'Fase advisory berfokus pada perencanaan strategis dan arsitektur. Implementasi teknis dapat dijalankan pada fase terpisah sesuai rekomendasi yang disetujui.'
      }
    ]
  },
  {
    id: 'it-governance-consulting',
    category: 'IT Consulting & Governance',
    title: 'IT Governance Consulting',
    shortDesc: 'Penataan struktur tata kelola, hak pengambilan keputusan, dan pengawasan manajemen TI organisasi.',
    overview: 'Membantu organisasi membangun kerangka tata kelola teknologi informasi yang memastikan akuntabilitas, transparansi, kepatuhan regulasi, serta mitigasi risiko operasional secara sistematis.',
    businessChallenges: [
      'Ketidakjelasan otoritas dan tanggung jawab dalam pengambilan keputusan teknologi.',
      'Kurangnya mekanisme pengawasan formal terhadap kinerja dan keamanan sistem TI.',
      'Tuntutan regulasi industri terkait kepatuhan tata kelola teknologi yang semakin ketat.'
    ],
    scope: [
      'Review struktur organisasi TI dan matriks wewenang (RACI)',
      'Perumusan kebijakan tata kelola TI dan piagam komite TI',
      'Penyusunan indikator kinerja utama (KPI) tata kelola teknologi',
      'Penyelarasan dengan prinsip dasar tata kelola standar industri'
    ],
    engagementProcess: [
      { step: 1, title: 'Scope Definition', description: 'Menentukan batasan divisi dan domain tata kelola yang akan ditata.' },
      { step: 2, title: 'Governance Baseline Review', description: 'Memeriksa kebijakan yang ada, alur persetujuan, dan praktik governance aktual.' },
      { step: 3, title: 'Framework Customization', description: 'Merancang model tata kelola yang realistis dan proporsional dengan skala organisasi.' },
      { step: 4, title: 'Socialization & Handover', description: 'Pelatihan singkat dan serah terima dokumen pedoman tata kelola kepada manajemen.' }
    ],
    expectedDeliverables: [
      'Pedoman Tata Kelola TI Organisasi (IT Governance Manual)',
      'Matriks Otoritas dan Pengambilan Keputusan TI (RACI Matrix)',
      'Template Formulir dan Standar Prosedur Evaluasi Berkala'
    ],
    faqs: [
      {
        question: 'Apakah kerangka tata kelola ini cocok untuk bisnis skala menengah?',
        answer: 'Ya, rancangan tata kelola kami dibuat proporsional dan tidak berbelit-belit, sehingga dapat diterapkan secara efisien oleh UMKM mapan maupun korporasi.'
      }
    ]
  },
  {
    id: 'it-process-assessment',
    category: 'IT Consulting & Governance',
    title: 'IT Process Assessment',
    shortDesc: 'Evaluasi efisiensi, kematangan proses manajemen layanan, dan kepatuhan alur kerja operasional TI.',
    overview: 'Penilaian mendalam terhadap proses-proses operasional TI—mulai dari manajemen insiden, manajemen perubahan (change management), hingga manajemen kapasitas—untuk menemukan hambatan dan celah inefisiensi.',
    businessChallenges: [
      'Perubahan konfigurasi sistem sering menimbulkan gangguan mendadak pada operasional bisnis.',
      'Penanganan insiden teknis lambat dan tidak terdokumentasi dengan baik.',
      'Ketiadaan data historis untuk mengukur performa tim operasional teknologi.'
    ],
    scope: [
      'Asesmen alur Incident & Problem Management',
      'Review prosedur Change & Release Management',
      'Evaluasi Service Desk & Customer Support SLA',
      'Penyusunan rekomendasi optimasi alur kerja'
    ],
    engagementProcess: [
      { step: 1, title: 'Data Gathering & Sampling', description: 'Pengumpulan tiket insiden, log perubahan, dan dokumen SOP yang berjalan.' },
      { step: 2, title: 'Maturity Scoring', description: 'Pengukuran tingkat kematangan proses operasional TI secara objektif.' },
      { step: 3, title: 'Root Cause & Bottleneck Analysis', description: 'Mengidentifikasi akar penyebab hambatan waktu penyelesaian masalah.' },
      { step: 4, title: 'Improvement Plan Delivery', description: 'Penyusunan rekomendasi perbaikan terstruktur beserta prioritas aksinya.' }
    ],
    expectedDeliverables: [
      'Laporan Tingkat Kematangan Proses TI (IT Process Maturity Report)',
      'Daftar Temuan Bottleneck Operasional dan Risiko Terkait',
      'Panduan Rencana Perbaikan Proses (Process Improvement Roadmap)'
    ],
    faqs: [
      {
        question: 'Apakah asesmen ini mengganggu aktivitas operasional harian tim kami?',
        answer: 'Tidak. Asesmen dilakukan melalui wawancara terencana dan kajian sampel dokumen tanpa menginterupsi jalannya operasional.'
      }
    ]
  },
  {
    id: 'technology-roadmap-advisory',
    category: 'IT Consulting & Governance',
    title: 'Technology Roadmap Advisory',
    shortDesc: 'Penyusunan jadwal prioritas inisiatif teknologi multi-tahun berbasis ketergantungan sistem dan kesiapan anggaran.',
    overview: 'Membantu organisasi memetakan fase-fase pembaruan sistem secara realistis dari jangka pendek, menengah, hingga jangka panjang, mempertimbangkan aspek teknis ketergantungan antar-sistem dan daya serap organisasi.',
    businessChallenges: [
      'Terlalu banyak proyek TI dimulai bersamaan sehingga menimbulkan kelelahan tim dan proyek mangkrak.',
      'Migrasi sistem yang tertunda karena ketergantungan antar-aplikasi tidak dipetakan sejak awal.',
      'Ketidakpastian alokasi anggaran investasi teknologi tahunan.'
    ],
    scope: [
      'Inventarisasi seluruh inisiatif dan ide proyek teknologi organisasi',
      'Analisis ketergantungan teknis dan arsitektur data antar-proyek',
      'Pemetaan prioritas dampak bisnis vs tingkat kesulitan implementasi',
      'Penyusunan timeline tahapan implementasi 1–3 tahun'
    ],
    engagementProcess: [
      { step: 1, title: 'Ideation & Pipeline Audit', description: 'Menghimpun seluruh rencana dan aspirasi proyek dari unit kerja.' },
      { step: 2, title: 'Dependency & Feasibility Mapping', description: 'Menganalisis prasyarat teknis dan ketergantungan platform.' },
      { step: 3, title: 'Roadmap Structuring', description: 'Menyusun tahapan gelombang (waves) implementasi yang seimbang.' },
      { step: 4, title: 'Milestone & Budget Phasing', description: 'Menetapkan indikator keberhasilan tiap fase beserta estimasi kebutuhan investasi.' }
    ],
    expectedDeliverables: [
      'Visual Timeline Roadmap Teknologi Multi-Tahun',
      'Matriks Ketergantungan dan Prasyarat Sistem',
      'Rencana Alokasi Sumber Daya dan Estimasi Jadwal Pengadaan'
    ],
    faqs: [
      {
        question: 'Seberapa fleksibel roadmap yang disusun jika terjadi perubahan arah bisnis?',
        answer: 'Roadmap dirancang dinamis dengan mekanisme review berkala setiap semester untuk menyesuaikan prioritas bisnis yang berubah.'
      }
    ]
  },
  {
    id: 'it-documentation-support',
    category: 'IT Consulting & Governance',
    title: 'IT Documentation Support',
    shortDesc: 'Standardisasi dokumen topologi jaringan, arsitektur aplikasi, SOP teknis, dan disaster recovery plan.',
    overview: 'Layanan penyusunan dan perapian dokumentasi teknologi informasi resmi yang memenuhi standar tata kelola profesional, memastikan pengetahuan teknis terdokumentasi rapi dan tidak bergantung pada individu tertentu.',
    businessChallenges: [
      'Ketergantungan ekstrem pada individu tertentu karena tidak adanya dokumentasi sistem tertulis.',
      'Dokumentasi konfigurasi jaringan dan server yang usang atau hilang.',
      'Kesulitan dalam menghadapi audit internal maupun eksternal akibat dokumen SOP tidak lengkap.'
    ],
    scope: [
      'Penyusunan diagram topologi jaringan fisik dan logis',
      'Dokumentasi arsitektur sistem informasi dan kamus data',
      'Penyusunan Standar Operasional Prosedur (SOP) operasional TI',
      'Penyusunan dokumen Disaster Recovery Plan (DRP) dasar'
    ],
    engagementProcess: [
      { step: 1, title: 'Asset & Configuration Discovery', description: 'Inventarisasi menyeluruh perangkat dan aplikasi yang belum terdokumentasi.' },
      { step: 2, title: 'Technical Interviewing', description: 'Wawancara dengan penanggung jawab teknis untuk mencatat konfigurasi riil.' },
      { step: 3, title: 'Drafting & Standardization', description: 'Penyusunan dokumen dalam format baku yang mudah dipelihara.' },
      { step: 4, title: 'Verification & Repository Setup', description: 'Uji verifikasi dokumen dan penataan repositori arsip dokumentasi digital.' }
    ],
    expectedDeliverables: [
      'Buku Panduan Topologi Jaringan & Daftar Konfigurasi Aset TI',
      'Kumpulan SOP Operasional TI Terstandar (Format Cetak & Digital)',
      'Dokumen Rencana Kontinjensi & Prosedur Pemulihan Bencana (DRP)'
    ],
    faqs: [
      {
        question: 'Format dokumen apa yang akan diserahkan kepada klien?',
        answer: 'Dokumen diserahkan dalam format siap cetak (PDF) dan format editable (Word/Visio/Draw.io) agar mudah diperbarui secara mandiri oleh tim Anda.'
      }
    ]
  },

  // B. Cybersecurity Advisory
  {
    id: 'information-security-assessment',
    category: 'Cybersecurity Advisory',
    title: 'Information Security Assessment',
    shortDesc: 'Pemeriksaan menyeluruh terhadap postur keamanan sistem, konfigurasi server, dan kontrol akses.',
    overview: 'Penilaian independen mengenai postur keamanan informasi organisasi Anda guna mendeteksi kerentanan teknis dan kelemahan administratif sebelum dieksploitasi oleh pihak yang tidak bertanggung jawab.',
    businessChallenges: [
      'Ketidaktahuan manajemen mengenai titik lemah sistem yang dapat ditembus peretas.',
      'Konfigurasi default server dan jaringan yang dibiarkan tanpa pengerasan (hardening).',
      'Risiko kebocoran data rahasia perusahaan dan data pribadi pelanggan.'
    ],
    scope: [
      'Asesmen konfigurasi keamanan server dan endpoint',
      'Review pengelolaan hak akses istimewa (Privileged Access Management)',
      'Pemeriksaan kepatuhan kata sandi dan autentikasi multifaktor',
      'Evaluasi kontrol proteksi perimeter dan segmentasi jaringan'
    ],
    engagementProcess: [
      { step: 1, title: 'Scope & Rules of Engagement', description: 'Menyepakati batasan sistem yang diperiksa dan jadwal asesmen non-invasif.' },
      { step: 2, title: 'Configuration Review & Testing', description: 'Pemeriksaan konfigurasi keamanan berbasis benchmark industri.' },
      { step: 3, title: 'Impact & Likelihood Analysis', description: 'Menganalisis potensi dampak bisnis dari setiap kerentanan yang teridentifikasi.' },
      { step: 4, title: 'Reporting & Remediation Briefing', description: 'Penyampaian laporan temuan dan rekomendasi mitigasi langkah demi langkah.' }
    ],
    expectedDeliverables: [
      'Laporan Hasil Asesmen Postur Keamanan Informasi',
      'Daftar Kerentanan Berdasarkan Tingkat Kritis (Kritis, Tinggi, Sedang, Rendah)',
      'Panduan Teknis Langkah Remidiasi (Remediation Action Plan)'
    ],
    faqs: [
      {
        question: 'Apakah asesmen keamanan ini menyebabkan gangguan layanan?',
        answer: 'Asesmen dirancang non-invasif dengan prioritas keselamatan operasional sistem produksi klien.'
      }
    ]
  },
  {
    id: 'security-gap-assessment',
    category: 'Cybersecurity Advisory',
    title: 'Security Gap Assessment',
    shortDesc: 'Komparasi kondisi keamanan aktual dengan standar acuan keamanan informasi (seperti ISO/IEC 27001).',
    overview: 'Layanan evaluasi kesenjangan untuk mengukur sejauh mana kebijakan, prosedur, dan kontrol keamanan yang telah diterapkan organisasi memenuhi standar praktik terbaik keamanan global.',
    businessChallenges: [
      'Ketidakpastian sejauh mana organisasi siap menghadapi sertifikasi atau audit keamanan.',
      'Kebijakan keamanan tertulis yang tidak sinkron dengan praktik aktual di lapangan.',
      'Kesulitan dalam memprioritaskan alokasi dana perbaikan keamanan.'
    ],
    scope: [
      'Review klausul manajemen dan kontrol operasional keamanan',
      'Komparasi praktik eksisting dengan standar acuan yang dipilih',
      'Identifikasi gap pemenuhan (Compliant, Partially Compliant, Non-Compliant)',
      'Perumusan langkah-langkah pemenuhan gap yang realistis'
    ],
    engagementProcess: [
      { step: 1, title: 'Standard Selection & Mapping', description: 'Menentukan standar acuan (misal Annex A ISO/IEC 27001 atau NIST CSF).' },
      { step: 2, title: 'Document & Evidence Examination', description: 'Memeriksa bukti pelaksanaan kontrol keamanan dan wawancara pelaksana.' },
      { step: 3, title: 'Gap Synthesis & Scoring', description: 'Menghitung persentase kesiapan dan memetakan kontrol yang belum terpenuhi.' },
      { step: 4, title: 'Gap Closure Plan Presentation', description: 'Menyajikan rencana pemenuhan terstruktur kepada pimpinan.' }
    ],
    expectedDeliverables: [
      'Matriks Kesenjangan Keamanan Informasi (Security Gap Analysis Matrix)',
      'Laporan Tingkat Kesiapan (Readiness Scorecard)',
      'Rencana Aksi Penutupan Celah Keamanan (Gap Closure Roadmap)'
    ],
    faqs: [
      {
        question: 'Standar apa saja yang dapat digunakan sebagai acuan asesmen gap?',
        answer: 'Kami mengacu pada standar ISO/IEC 27001, framework NIST CSF, atau CIS Controls sesuai kesepakatan dan kebutuhan organisasi.'
      }
    ]
  },
  {
    id: 'security-risk-assessment',
    category: 'Cybersecurity Advisory',
    title: 'Information Security Risk Assessment',
    shortDesc: 'Identifikasi aset informasi berharga, ancaman siber, kerentanan, dan perumusan Risk Treatment Plan.',
    overview: 'Metodologi sistematis untuk mengidentifikasi seluruh aset informasi kritis, menganalisis ancaman dan kerentanan yang relevan, serta menentukan strategi penanganan risiko (mitigate, accept, transfer, avoid) yang terukur.',
    businessChallenges: [
      'Belum adanya daftar inventaris aset informasi berharga dan pemilik aset (asset owner).',
      'Ketidakmampuan menilai risiko siber secara objektif berdasarkan probabilitas dan dampak finansial/operasional.',
      'Ketiadaan rencana penanganan risiko (Risk Treatment Plan) yang terstruktur.'
    ],
    scope: [
      'Inventarisasi dan klasifikasi nilai aset informasi (Confidentiality, Integrity, Availability)',
      'Identifikasi profil ancaman (Threat Profile) dan potensi kerentanan aset',
      'Penilaian besaran risiko inheren dan risiko residual',
      'Penyusunan Rencana Penanganan Risiko (Risk Treatment Plan)'
    ],
    engagementProcess: [
      { step: 1, title: 'Asset Profiling', description: 'Pendataan seluruh aset data, hardware, software, dan personil kunci.' },
      { step: 2, title: 'Threat & Vulnerability Identification', description: 'Memetakan potensi bahaya yang mengancam tiap kelompok aset.' },
      { step: 3, title: 'Risk Calculation & Prioritization', description: 'Menilai tingkat risiko menggunakan matriks dampak dan kemungkinan.' },
      { step: 4, title: 'Treatment Strategy Formulation', description: 'Menentukan kontrol mitigasi yang tepat dan bertanggung jawab.' }
    ],
    expectedDeliverables: [
      'Daftar Inventaris Aset Informasi Berbobot (Asset Inventory & Valuation)',
      'Daftar Risiko Keamanan Informasi (Risk Register)',
      'Rencana Penanganan Risiko Keamanan (Risk Treatment Plan - RTP)'
    ],
    faqs: [
      {
        question: 'Apakah Risk Register ini dapat dipakai langsung untuk persyaratan audit ISO 27001?',
        answer: 'Ya, format metodologi risk assessment yang kami gunakan disusun selaras dengan pedoman ISO/IEC 27005 sehingga siap diaudit.'
      }
    ]
  },
  {
    id: 'security-policy-development',
    category: 'Cybersecurity Advisory',
    title: 'Security Policy and Procedure Development',
    shortDesc: 'Penyusunan dokumen kebijakan keamanan, standar operasional, dan panduan teknis yang aplikatif.',
    overview: 'Membantu organisasi merumuskan kerangka regulasi internal keamanan informasi yang jelas, terstruktur, mudah dipahami karyawan, dan dapat ditegakkan secara operasional.',
    businessChallenges: [
      'Karyawan tidak memiliki panduan resmi mengenai perlakuan data sensitif perusahaan.',
      'Dokumen kebijakan yang terlalu teoritis sehingga diabaikan dalam pekerjaan harian.',
      'Ketiadaan sanksi dan batasan wewenang yang jelas saat terjadi pelanggaran keamanan.'
    ],
    scope: [
      'Penyusunan Kebijakan Keamanan Informasi Induk (Information Security Policy)',
      'Penyusunan Kebijakan Penggunaan Wajar (Acceptable Use Policy - AUP)',
      'Penyusunan SOP Pengelolaan Akses, Backup, Patching, dan Incident Response',
      'Penyusunan Formulir Kepatuhan & Persetujuan Kerahasiaan (NDA)'
    ],
    engagementProcess: [
      { step: 1, title: 'Policy Gap & Context Analysis', description: 'Mengidentifikasi kebutuhan regulasi spesifik organisasi.' },
      { step: 2, title: 'Drafting & Review', description: 'Menyusun draf kebijakan yang realistis dengan bahasa hukum dan teknis yang pas.' },
      { step: 3, title: 'Management Stakeholder Alignment', description: 'Penyesuaian masukan dengan divisi legal, HR, dan operasional.' },
      { step: 4, title: 'Finalization & Rollout Strategy', description: 'Pengesahan dokumen dan penyusunan strategi sosialisasi internal.' }
    ],
    expectedDeliverables: [
      'Paket Kebijakan Keamanan Informasi Lengkap (Master Policy & Sub-Policies)',
      'Kumpulan SOP Keamanan Teknis (Akses, Kata Sandi, Penanganan Data)',
      'Template Formulir Pengendalian dan Logbook Kepatuhan'
    ],
    faqs: [
      {
        question: 'Apakah dokumen kebijakan yang disusun bisa disesuaikan dengan aturan internal yang sudah ada?',
        answer: 'Tentu. Kami mengintegrasikan dokumen baru dengan hierarki peraturan perusahaan yang sudah berlaku agar tidak tumpang tindih.'
      }
    ]
  },
  {
    id: 'security-governance-advisory',
    category: 'Cybersecurity Advisory',
    title: 'Security Governance Advisory',
    shortDesc: 'Penyusunan struktur komite keamanan, pembagian peran tanggung jawab, dan pelaporan metrik risiko.',
    overview: 'Membantu dewan direksi dan manajemen membangun tata kelola keamanan siber tingkat pimpinan, menetapkan batas toleransi risiko (risk appetite), serta mekanisme pelaporan keamanan yang berkala.',
    businessChallenges: [
      'Keamanan siber masih dipandang semata-mata sebagai urusan divisi teknis TI, bukan risiko bisnis utama.',
      'Tidak adanya forum koordinasi lintas divisi untuk membahas insiden dan isu keamanan data.',
      'Kurangnya metrik keamanan yang dapat dipahami oleh pimpinan non-teknis.'
    ],
    scope: [
      'Perumusan struktur tim penanggung jawab keamanan informasi',
      'Penyusunan piagam (charter) komite keamanan siber',
      'Perumusan Key Performance & Risk Indicators (KPI / KRI) keamanan',
      'Panduan pelaporan berkala kepada manajemen eksekutif'
    ],
    engagementProcess: [
      { step: 1, title: 'Governance Structure Review', description: 'Mengkaji garis pelaporan dan tanggung jawab keamanan saat ini.' },
      { step: 2, title: 'Charter & Role Design', description: 'Merancang pembagian peran pertahanan lapis satu, dua, dan tiga.' },
      { step: 3, title: 'Metrics Definition', description: 'Menetapkan indikator risiko yang relevan bagi jajaran eksekutif.' },
      { step: 4, title: 'Implementation Workshop', description: 'Lokakarya pembekalan bagi personil komite keamanan.' }
    ],
    expectedDeliverables: [
      'Piagam Tata Kelola Keamanan Informasi (Security Governance Charter)',
      'Matriks Tanggung Jawab Keamanan Siber Antar-Divisi',
      'Format Dashboard Pelaporan Metrik Keamanan Eksekutif'
    ],
    faqs: [
      {
        question: 'Apakah organisasi non-korporasi memerlukan tata kelola keamanan semacam ini?',
        answer: 'Setiap institusi yang mengelola data penting memerlukan kejelasan peran dan penanggung jawab agar respon terhadap insiden dapat berjalan efektif.'
      }
    ]
  },
  {
    id: 'security-improvement-planning',
    category: 'Cybersecurity Advisory',
    title: 'Security Improvement Planning',
    shortDesc: 'Penyusunan program perbaikan keamanan berkelanjutan berbasis prioritas risiko dan kapasitas organisasi.',
    overview: 'Merancang roadmap peningkatan kapabilitas keamanan informasi jangka pendek, menengah, dan panjang secara realistis, selaras dengan sumber daya dan alokasi anggaran yang tersedia.',
    businessChallenges: [
      'Upaya peningkatan keamanan sporadis dan reaktif hanya setelah terjadi insiden.',
      'Kesulitan menentukan kontrol mana yang harus diprioritaskan terlebih dahulu.',
      'Keterbatasan anggaran yang memerlukan optimalisasi alokasi solusi tepat sasaran.'
    ],
    scope: [
      'Pengelompokan temuan risiko ke dalam inisiatif terarah',
      'Penyusunan skala prioritas berdasarkan rasio dampak mitigasi vs biaya',
      'Penetapan tonggak pencapaian (milestone) dan indikator keberhasilan',
      'Panduan monitoring kemajuan implementasi program perbaikan'
    ],
    engagementProcess: [
      { step: 1, title: 'Findings Consolidation', description: 'Mengkonsolidasikan hasil asesmen risiko dan gap sebelumnya.' },
      { step: 2, title: 'Cost-Benefit Prioritization', description: 'Menimbang efektivitas kontrol mitigasi terhadap biaya implementasi.' },
      { step: 3, title: 'Program Phasing', description: 'Menyusun pembagian gelombang perbaikan (Quick Wins, Fundamental, Advanced).' },
      { step: 4, title: 'Final Program Packaging', description: 'Dokumentasi program kerja formal untuk pengajuan anggaran pimpinan.' }
    ],
    expectedDeliverables: [
      'Dokumen Rencana Aksi Peningkatan Keamanan (Security Improvement Plan)',
      'Matriks Prioritas Inisiatif (Quick Wins vs Long-term Investments)',
      'Panduan Evaluasi Berkala Pelaksanaan Program'
    ],
    faqs: [
      {
        question: 'Bagaimana jika organisasi kami memiliki anggaran yang sangat terbatas?',
        answer: 'Program peningkatan kami menitikberatkan pada "Quick Wins" dan perbaikan tata kelola prosedur terlebih dahulu yang tidak memerlukan pembelian perangkat lunak mahal.'
      }
    ]
  },

  // C. Software & Application Development
  {
    id: 'custom-web-application',
    category: 'Software & Application Development',
    title: 'Custom Web Application Development',
    shortDesc: 'Pengembangan aplikasi web khusus dengan arsitektur modern, aman, dan dirancang sesuai kebutuhan proses bisnis.',
    overview: 'Pembangunan aplikasi web kustom yang dirancang dari nol sesuai spesifikasi unik organisasi Anda, menggunakan stack teknologi modern, kontrol hak akses kuat, dan antarmuka responsif.',
    businessChallenges: [
      'Aplikasi komersial yang tersedia di pasar tidak cocok dengan alur operasional khusus perusahaan.',
      'Sistem yang ada sulit diintegrasikan dengan database atau software internal lainnya.',
      'Tuntutan akses sistem dari berbagai lokasi dan perangkat secara aman.'
    ],
    scope: [
      'Pengumpulan kebutuhan detail dan penyusunan Software Requirement Specification (SRS)',
      'Perancangan antarmuka pengguna (UI/UX) dan prototipe interaktif',
      'Pengembangan frontend responsif dan backend API terstruktur',
      'Pengujian fungsional (Quality Assurance) dan pengamanan aplikasi'
    ],
    engagementProcess: [
      { step: 1, title: 'Requirement Analysis & Wireframing', description: 'Memahami spesifikasi modul dan menyepakati sketsa alur layar.' },
      { step: 2, title: 'Architecture & Database Design', description: 'Merancang struktur tabel, indexing, dan skema integrasi.' },
      { step: 3, title: 'Sprint-Based Development', description: 'Pengembangan bertahap dengan demo berkala kepada klien.' },
      { step: 4, title: 'User Acceptance Testing & Deployment', description: 'Uji terima oleh pengguna, pelatihan, dan publikasi ke lingkungan server.' }
    ],
    expectedDeliverables: [
      'Dokumen Spesifikasi Kebutuhan Sistem (SRS) & Desain Arsitektur',
      'Source Code Aplikasi Lengkap beserta Repositori Terkelola',
      'Buku Panduan Pengguna (User Manual) dan Panduan Administrator (Admin Manual)'
    ],
    faqs: [
      {
        question: 'Apakah hak cipta dan source code menjadi milik klien?',
        answer: 'Ya, seluruh source code dan kekayaan intelektual hasil pengembangan kustom diserahkan penuh kepada klien sesuai kontrak kerja sama.'
      }
    ]
  },
  {
    id: 'business-process-digitization',
    category: 'Software & Application Development',
    title: 'Business Process Digitization',
    shortDesc: 'Konversi proses bisnis manual, formulir kertas, dan persetujuan fisik menjadi aplikasi digital terintegrasi.',
    overview: 'Membantu organisasi meninggalkan beban birokrasi formulir manual dan pencatatan spreadsheets yang rawan tercecer dengan membangun modul aplikasi alur kerja digital yang terpusat.',
    businessChallenges: [
      'Waktu persetujuan dokumen berhari-hari karena menunggu tanda tangan fisik pejabat berwenang.',
      'Kesulitan melacak posisi berkas permohonan atau dokumen kerja.',
      'Resiko kehilangan atau kerusakan berkas dokumen fisik.'
    ],
    scope: [
      'Analisis alur dokumen fisik dan pemetaan alur digital',
      'Pembuatan formulir dinamis dengan validasi input data ketat',
      'Implementasi alur otorisasi multi-level dan notifikasi sistem',
      'Penyediaan dashboard tracking status dokumen real-time'
    ],
    engagementProcess: [
      { step: 1, title: 'Process Mapping Workshop', description: 'Membedah formulir fisik dan alur persetujuan yang berjalan.' },
      { step: 2, title: 'Workflow Modeling', description: 'Membuat alur logika digital dan aturan validasi data.' },
      { step: 3, title: 'System Prototyping & Pilot', description: 'Uji coba pilot pada satu unit kerja terpilih.' },
      { step: 4, title: 'Full Rollout & Training', description: 'Penerapan menyeluruh dan bimbingan teknis ke seluruh staf.' }
    ],
    expectedDeliverables: [
      'Modul Aplikasi Digitalisasi Alur Kerja Terintegrasi',
      'Panduan Prosedur Operasional Standar Digital',
      'Laporan Hasil Uji Coba Pilot dan Serah Terima Sistem'
    ],
    faqs: [
      {
        question: 'Apakah sistem digitalisasi ini dapat diintegrasikan dengan email pemberitahuan?',
        answer: 'Ya, notifikasi email otomatis disertakan untuk mengingatkan pengguna saat ada berkas yang menunggu verifikasi atau persetujuan.'
      }
    ]
  },
  {
    id: 'application-enhancement',
    category: 'Software & Application Development',
    title: 'Application Enhancement & Refactoring',
    shortDesc: 'Peningkatan performa, pembaruan fitur, perbaikan bug, dan penguatan keamanan aplikasi yang sudah ada.',
    overview: 'Layanan modernisasi kode dan penambahan kapabilitas pada aplikasi existing klien agar kembali cepat, aman, dan relevan dengan perkembangan operasional terbaru.',
    businessChallenges: [
      'Aplikasi yang lambat saat menangani volume data yang terus membesar.',
      'Arsitektur lama yang sulit ditambah fitur baru karena ketergantungan kode yang rumit (spaghetti code).',
      'Kekhawatiran terhadap celah keamanan pada dependensi versi usang.'
    ],
    scope: [
      'Code audit dan profiling performa aplikasi',
      'Refactoring struktur kode untuk modularitas yang lebih baik',
      'Optimasi query database dan caching',
      'Pembaruan library dependensi dan penambalan celah keamanan'
    ],
    engagementProcess: [
      { step: 1, title: 'Codebase Review', description: 'Pemeriksaan struktur kode sumber dan identifikasi titik bottleneck.' },
      { step: 2, title: 'Action Priority Matrix', description: 'Menentukan prioritas perbaikan yang memberikan dampak performa tercepat.' },
      { step: 3, title: 'Refactoring & Feature Extension', description: 'Pembersihan kode dan penambahan modul fitur baru.' },
      { step: 4, title: 'Regression Testing & Benchmarking', description: 'Uji komparasi kecepatan dan stabilitas sebelum rilis kembali.' }
    ],
    expectedDeliverables: [
      'Laporan Code Health & Performance Benchmark (Before vs After)',
      'Source Code Ter-refactor yang Lebih Rapi dan Aman',
      'Dokumentasi Teknis Modul Fitur Baru'
    ],
    faqs: [
      {
        question: 'Apakah aplikasi kami harus dimatikan saat proses enhancement berlangsung?',
        answer: 'Tidak. Seluruh pengujian dan pengembangan dilakukan di lingkungan staging terpisah hingga siap dideploy saat waktu low-traffic.'
      }
    ]
  },
  {
    id: 'database-application-development',
    category: 'Software & Application Development',
    title: 'Database Application Development',
    shortDesc: 'Perancangan basis data relasional berkinerja tinggi, indexing terstruktur, dan portal manajemen data.',
    overview: 'Membangun fondasi basis data korporat yang kokoh, terproteksi, dan berkinerja tinggi lengkap dengan antarmuka manajemen data internal yang intuitif untuk staf operasional.',
    businessChallenges: [
      'Penyimpanan data yang tersebar di puluhan file spreadsheet yang tidak sinkron.',
      'Ketidakkonsistenan data (data anomaly) akibat struktur tabel yang tidak ternormalisasi.',
      'Waktu eksekusi laporan analitik yang memakan waktu lama.'
    ],
    scope: [
      'Perancangan Entity Relationship Diagram (ERD) dan normalisasi data',
      'Konfigurasi indeks komposit dan optimasi kueri kompleks',
      'Pembangunan antarmuka entri dan validasi data berbasis peran',
      'Penetapan skrip backup otomatis dan rotasi data historis'
    ],
    engagementProcess: [
      { step: 1, title: 'Data Entity Analysis', description: 'Mendata seluruh entitas informasi dan relasi logis antar-data.' },
      { step: 2, title: 'Schema Optimization', description: 'Membangun skema tabel dengan batasan integritas (foreign keys, check constraints).' },
      { step: 3, title: 'Admin UI Construction', description: 'Membangun aplikasi pengelolaan data dengan filter cepat dan fitur ekspor.' },
      { step: 4, title: 'Stress Testing & Index Tuning', description: 'Uji beban dengan dataset besar untuk memastikan kecepatan respon kueri.' }
    ],
    expectedDeliverables: [
      'Diagram Arsitektur ERD dan Kamus Data (Data Dictionary)',
      'Skrip DDL Basis Data dan Konfigurasi Backup Otomatis',
      'Aplikasi Pengelolaan Data (Data Management Portal)'
    ],
    faqs: [
      {
        question: 'Basis data apa saja yang didukung oleh LIB?',
        answer: 'Kami menguasai PostgreSQL, MySQL/MariaDB, serta basis data dokumen modern sesuai karakteristik beban data Anda.'
      }
    ]
  },
  {
    id: 'system-integration-service',
    category: 'Software & Application Development',
    title: 'System Integration',
    shortDesc: 'Penghubungan aplikasi yang terpisah menggunakan API, middleware, dan mekanisme pertukaran data otomatis.',
    overview: 'Menghubungkan aplikasi-aplikasi yang berdiri sendiri (silo) agar dapat bertukar data secara instan, aman, dan tanpa intervensi manual berulang.',
    businessChallenges: [
      'Staf harus menginput ulang data yang sama ke dalam beberapa aplikasi berbeda.',
      'Perbedaan format data antar sistem menyebabkan seringnya terjadi inkonsistensi laporan.',
      'Sulitnya mendapatkan gambaran menyeluruh performa bisnis secara real-time.'
    ],
    scope: [
      'Pemetaan endpoint API dan skema pertukaran data antar-aplikasi',
      'Pengembangan middleware integrasi dan transformasi format data',
      'Penerapan protokol keamanan komunikasi (TLS, HMAC, OAuth2 tokens)',
      'Mekanisme logging transaksi dan antrian retry otomatis'
    ],
    engagementProcess: [
      { step: 1, title: 'Interface Analysis', description: 'Mempelajari dokumentasi API atau struktur data dari masing-masing sistem.' },
      { step: 2, title: 'Data Mapping & Transformation Rules', description: 'Menentukan pemetaan field dan rumus konversi nilai data.' },
      { step: 3, title: 'Middleware Engine Build', description: 'Membangun jembatan integrasi dengan proteksi penanganan error.' },
      { step: 4, title: 'End-to-End Testing & Monitoring', description: 'Uji coba pertukaran data di lingkungan simulasi dan pemantauan log transaksi.' }
    ],
    expectedDeliverables: [
      'Dokumen Spesifikasi Antarmuka Integrasi (Interface Specification Document)',
      'Aplikasi Middleware Jembatan Integrasi Berbasis API',
      'Dashboard Monitoring Status Sinkronisasi dan Alerting Insiden'
    ],
    faqs: [
      {
        question: 'Bagaimana jika salah satu aplikasi lama kami tidak memiliki fitur API resmi?',
        answer: 'Kami dapat mengevaluasi kemungkinan integrasi berbasis database view, automated export-import staging, atau direct webhook yang aman.'
      }
    ]
  },

  // D. IT Infrastructure & Integration
  {
    id: 'infrastructure-planning',
    category: 'IT Infrastructure & Integration',
    title: 'Infrastructure Planning',
    shortDesc: 'Perancangan kapasitas server, kebutuhan daya listrik, pendingin, dan topologi jaringan gedung kantor.',
    overview: 'Perencanaan matang sebelum investasi perangkat keras dilakukan, memastikan kapasitas komputasi, kelistrikan, dan jaringan dirancang proporsional dengan proyeksi pertumbuhan bisnis.',
    businessChallenges: [
      'Pembelian server atau perangkat jaringan yang cepat usang karena kalkulasi kapasitas yang salah.',
      'Ruang server yang panas dan sering mati listrik karena tidak ada perhitungan daya dan pendingin.',
      'Biaya perawatan infrastruktur yang membengkak tanpa efisiensi yang terukur.'
    ],
    scope: [
      'Analisis beban kerja komputasi dan kebutuhan kapasitas storage/RAM/CPU',
      'Perhitungan kebutuhan daya listrik UPS dan sistem pendinginan (cooling)',
      'Perancangan tata letak rak server dan jalur kabel terstruktur',
      'Penyusunan anggaran belanja modal (CAPEX) dan operasional (OPEX)'
    ],
    engagementProcess: [
      { step: 1, title: 'Site Inspection & Workload Audit', description: 'Survei lokasi fisik ruang server dan audit beban sistem yang akan di-host.' },
      { step: 2, title: 'Capacity Sizing Calculation', description: 'Kalkulasi kebutuhan kapasitas untuk jangka waktu 3 hingga 5 tahun ke depan.' },
      { step: 3, title: 'Schematic Design', description: 'Pembuatan gambar skematik tata letak rak, jalur pengkabelan, dan distribusi daya.' },
      { step: 4, title: 'Specification & Budget Delivery', description: 'Penyusunan dokumen rincian teknis dan estimasi anggaran pengadaan.' }
    ],
    expectedDeliverables: [
      'Dokumen Rencana Desain Infrastruktur Fisik & Komputasi',
      'Gambar Skematik Tata Letak Ruang Server dan Topologi Jaringan',
      'Daftar Rincian Spesifikasi Teknis Pengadaan (BoQ & KAK)'
    ],
    faqs: [
      {
        question: 'Apakah perencanaan ini cocok untuk kantor yang ingin membangun ruang server skala kecil?',
        answer: 'Ya, kami melayani perencanaan mulai dari single-rack server room untuk kantor cabang hingga fasilitas data center institusi.'
      }
    ]
  },
  {
    id: 'network-server-solutions',
    category: 'IT Infrastructure & Integration',
    title: 'Network and Server Solutions',
    shortDesc: 'Konfigurasi switch managed, router enterprise, virtualisasi server, dan pengamanan perimeter firewall.',
    overview: 'Implementasi dan konfigurasi teknis mendalam untuk perangkat jaringan dan server, memastikan kinerja optimal, segmentasi lalu lintas data yang aman, dan ketersediaan tinggi (high availability).',
    businessChallenges: [
      'Jaringan kantor sering lambat atau down saat jam sibuk operasional.',
      'Ketiadaan pemisahan antara trafik data sensitif keuangan dan koneksi tamu umum.',
      'Server fisik yang tidak termanfaatkan optimal karena belum menerapkan virtualisasi.'
    ],
    scope: [
      'Setup router korporat, routing dinamis, dan failover multi-ISP',
      'Konfigurasi Managed Switch, VLAN, Spanning Tree Protocol (STP)',
      'Penerapan platform virtualisasi server (seperti Proxmox VE / KVM)',
      'Konfigurasi aturan firewall (Stateful Inspection & NAT rules)'
    ],
    engagementProcess: [
      { step: 1, title: 'Pre-configuration Lab Testing', description: 'Uji konfigurasi dasar di lingkungan lab sebelum deployment ke perangkat produksi.' },
      { step: 2, title: 'On-site Installation & Cable Patching', description: 'Pemasangan perangkat pada rak server dan penataan kabel patch.' },
      { step: 3, title: 'Policy & VLAN Commissioning', description: 'Penerapan aturan routing, segmentasi VLAN, dan kebijakan firewall.' },
      { step: 4, title: 'Throughput & Failover Validation', description: 'Pengujian performa throughput data dan simulasi kegagalan jalur (failover test).' }
    ],
    expectedDeliverables: [
      'Dokumentasi Konfigurasi Perangkat (Network & Server Config Sheet)',
      'Laporan Hasil Pengujian Bandwidth dan Failover',
      'Panduan Dasar Pengoperasian dan Pemulihan Konfigurasi Backup'
    ],
    faqs: [
      {
        question: 'Apakah tim kami akan dilatih untuk mengoperasikan konfigurasi ini?',
        answer: 'Ya, setiap penyerahan proyek mencakup sesi transfer pengetahuan (knowledge transfer) dan penyerahan akun administrator.'
      }
    ]
  },
  {
    id: 'hardware-software-procurement-service',
    category: 'IT Infrastructure & Integration',
    title: 'Hardware and Software Procurement Support',
    shortDesc: 'Pendampingan evaluasi teknis, verifikasi keaslian lisensi, dan tata kelola pengadaan barang teknologi.',
    overview: 'Layanan konsultatif pendampingan pengadaan yang menjamin organisasi Anda membeli perangkat dan lisensi yang benar-benar sesuai spesifikasi, terbebas dari markup tidak wajar, serta memenuhi kepatuhan lisensi resmi.',
    businessChallenges: [
      'Membeli perangkat yang ternyata tidak kompatibel dengan infrastruktur yang ada.',
      'Risiko pengadaan perangkat tiruan (refurbished tidak resmi) atau lisensi non-original.',
      'Kurangnya pemahaman teknis staf pengadaan dalam membandingkan penawaran vendor.'
    ],
    scope: [
      'Penyusunan Kerangka Acuan Kerja (KAK) dan spesifikasi teknis barang',
      'Evaluasi komparatif penawaran teknis dari berbagai pemasok',
      'Verifikasi keaslian lisensi dan registrasi garansi resmi pabrikan',
      'Pendampingan uji fungsi saat serah terima barang (Acceptance Test)'
    ],
    engagementProcess: [
      { step: 1, title: 'Requirement Clarification', description: 'Menegaskan detail kebutuhan fungsional dan beban operasional.' },
      { step: 2, title: 'Tender / Quotation Review', description: 'Analisis objektif terhadap spesifikasi yang diajukan vendor.' },
      { step: 3, title: 'Inspection on Arrival', description: 'Pengecekan fisik barang, nomor seri, dan dokumen keaslian lisensi.' },
      { step: 4, title: 'Sign-off Support', description: 'Pemberian rekomendasi persetujuan berita acara serah terima teknis.' }
    ],
    expectedDeliverables: [
      'Matriks Evaluasi Komparasi Teknis Vendor',
      'Berita Acara Uji Fungsi dan Kelaikan Barang (Acceptance Test Report)',
      'Buku Rekapitulasi Registrasi Aset dan Lisensi Legal'
    ],
    faqs: [
      {
        question: 'Apakah LIB bertindak sebagai distributor tunggal perangkat tertentu?',
        answer: 'LIB bertindak independen sebagai konsultan pendamping teknis, sehingga rekomendasi kami murni berpihak pada kepentingan dan efisiensi klien.'
      }
    ]
  },
  {
    id: 'infrastructure-integration',
    category: 'IT Infrastructure & Integration',
    title: 'Infrastructure Integration',
    shortDesc: 'Penyatuan infrastruktur server lokal (on-premise) dengan cloud service dan perangkat edge operasional.',
    overview: 'Membangun arsitektur hibrida yang menghubungkan infrastruktur server lokal dengan layanan cloud atau sistem kantor cabang secara aman, transparan, dan terkelola.',
    businessChallenges: [
      'Kebutuhan backup data offsite ke cloud tanpa mengubah workflow aplikasi internal.',
      'Komunikasi data yang rentan disadap saat melintasi jaringan internet publik antar-cabang.',
      'Fragmentasi pengelolaan server lokal dan server cloud yang berjalan sendiri-sendiri.'
    ],
    scope: [
      'Pembangunan tunnel Virtual Private Network (Site-to-Site VPN) terenkripsi IPsec/WireGuard',
      'Integrasi direktori pengguna terpusat (LDAP/Active Directory)',
      'Pengaturan sinkronisasi data terjadwal antar lokasi',
      'Sentralisasi monitoring log dan ketersediaan perangkat (SNMP & Telemetri)'
    ],
    engagementProcess: [
      { step: 1, title: 'Architecture Assessment', description: 'Pemetaan endpoint jaringan di kantor pusat, cabang, dan cloud.' },
      { step: 2, title: 'Encrypted Channel Setup', description: 'Konfigurasi tunnel VPN berkecepatan tinggi dengan enkripsi kuat.' },
      { step: 3, title: 'Service Federation & Sync', description: 'Penyambungan layanan direktori dan penjadwalan replikasi data.' },
      { step: 4, title: 'Latency & Security Testing', description: 'Pengujian latensi transmisi dan audit keamanan celah tunnel.' }
    ],
    expectedDeliverables: [
      'Topologi Arsitektur Integrasi Hibrida Terpadu',
      'Kunci Enkripsi dan Prosedur Rotasi Sertifikat Keamanan',
      'Panduan Prosedur Pemulihan Konektivitas Terputus'
    ],
    faqs: [
      {
        question: 'Apakah integrasi ini membutuhkan koneksi internet berkecepatan tinggi khusus?',
        answer: 'Sistem dapat disesuaikan dengan koneksi internet broadband yang sudah ada, dengan optimasi protokol transmisi hemat bandwidth.'
      }
    ]
  },
  {
    id: 'technical-implementation-support',
    category: 'IT Infrastructure & Integration',
    title: 'Technical Implementation Support',
    shortDesc: 'Pendampingan langsung on-site maupun remote selama proses instalasi, migrasi sistem, dan commissioning.',
    overview: 'Dukungan teknisi dan insinyur berpengalaman yang hadir mendampingi tim klien untuk memastikan migrasi sistem, pemindahan server, atau instalasi baru berjalan mulus dengan risiko downtime seminimal mungkin.',
    businessChallenges: [
      'Kekhawatiran terjadi kegagalan operasional saat migrasi sistem dilakukan pada hari kerja.',
      'Keterbatasan staf teknis internal untuk menangani instalasi skala besar secara mandiri.',
      'Kurangnya persiapan rencana kontinjensi (rollback plan) jika migrasi mengalami kendala.'
    ],
    scope: [
      'Penyusunan jadwal rencana kerja migrasi (Cutover Plan) rinci jam per jam',
      'Pendampingan langsung teknis di lokasi (on-site engineering standby)',
      'Penyusunan prosedur pembatalan darurat (Rollback & Contingency Plan)',
      'Verifikasi fungsional pasca implementasi (Post-Implementation Verification)'
    ],
    engagementProcess: [
      { step: 1, title: 'Cutover Planning Meeting', description: 'Menyepakati jadwal eksekusi (biasanya akhir pekan) dan peran tiap personil.' },
      { step: 2, title: 'Pre-flight Check & Full Backup', description: 'Memastikan backup lengkap tervalidasi sebelum eksekusi dimulai.' },
      { step: 3, title: 'Live Execution & Monitoring', description: 'Eksekusi migrasi sesuai rencana kerja dengan pemantauan parameter ketat.' },
      { step: 4, title: 'Post-Cutover Handholding', description: 'Pendampingan intensif pada hari kerja pertama pasca rilis baru.' }
    ],
    expectedDeliverables: [
      'Dokumen Rencana Pelaksanaan Cutover & Skenario Rollback',
      'Laporan Berita Acara Pelaksanaan Migrasi Teknis',
      'Log Observasi Stabilitas Sistem Masa Stabilisasi Awal'
    ],
    faqs: [
      {
        question: 'Kapan waktu pelaksanaan pendampingan implementasi biasanya dilakukan?',
        answer: 'Kami siap mendampingi eksekusi di luar jam kerja (malam hari atau akhir pekan) demi menjaga kelancaran operasional bisnis utama Anda.'
      }
    ]
  }
];
