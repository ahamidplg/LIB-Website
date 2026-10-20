export const governanceFrameworkStages = [
  {
    step: '01',
    phase: 'Governance',
    title: 'Tata Kelola & Kebijakan',
    description: 'Menetapkan arahan strategis kepemimpinan, batasan toleransi risiko (risk appetite), dan kerangka kebijakan keamanan informasi dasar.',
    activities: [
      'Penetapan komite pengarah TI / Keamanan',
      'Penyusunan Kebijakan Keamanan Induk',
      'Definisi peran dan tanggung jawab (RACI)'
    ]
  },
  {
    step: '02',
    phase: 'Risk Assessment',
    title: 'Penilaian Risiko & Celah',
    description: 'Mengidentifikasi aset kritis, menilai probabilitas dan potensi dampak ancaman, serta memetakan kesenjangan terhadap standar acuan.',
    activities: [
      'Inventarisasi aset dan penentuan nilai kritis',
      'Pemodelan ancaman dan analisa kerentanan',
      'Penyusunan Risk Register & Risk Treatment Plan'
    ]
  },
  {
    step: '03',
    phase: 'Implementation',
    title: 'Penerapan Kontrol & Solusi',
    description: 'Menerapkan kontrol keamanan fisik, teknis, dan administratif yang telah direncanakan untuk menurunkan risiko ke tingkat yang dapat diterima.',
    activities: [
      'Penerapan SOP dan panduan teknis operasional',
      'Konfigurasi kontrol teknis (enkripsi, akses, firewall)',
      'Program edukasi kesadaran keamanan karyawan'
    ]
  },
  {
    step: '04',
    phase: 'Evaluation',
    title: 'Evaluasi & Audit Kepatuhan',
    description: 'Mengukur efektivitas kontrol yang diterapkan melalui pengujian, evaluasi metrik kinerja, dan audit kepatuhan berkala.',
    activities: [
      'Pelaksanaan audit internal secara objektif',
      'Review log insiden dan performa keamanan',
      'Pelaporan status risiko kepada jajaran direksi'
    ]
  },
  {
    step: '05',
    phase: 'Continual Improvement',
    title: 'Perbaikan Berkesinambungan',
    description: 'Menindaklanjuti temuan evaluasi, menutup akar masalah ketidaksesuaian, dan memperbarui kebijakan selaras dinamika lanskap ancaman baru.',
    activities: [
      'Pelaksanaan tindakan korektif (CAPA)',
      'Penyesuaian roadmap keamanan tahunan',
      'Pengkinian profil ancaman dan prosedur sistem'
    ]
  }
];

export const governanceAdvisoryTopics = [
  {
    title: 'Information Security Governance',
    desc: 'Menghubungkan sasaran strategis bisnis dengan pengawasan keamanan informasi untuk memastikan kepatuhan hukum dan proteksi aset korporat.',
    highlights: ['Akuntabilitas pimpinan', 'Penyelarasan strategi bisnis & risiko siber', 'Pengawasan kepatuhan regulasi data']
  },
  {
    title: 'Security Risk Management',
    desc: 'Penerapan metodologi identifikasi dan mitigasi risiko berbasis aset berharga secara terstruktur dan terukur.',
    highlights: ['Risk Treatment Plan yang aplikatif', 'Kalkulasi risiko residual', 'Inventarisasi aset informasi kritis']
  },
  {
    title: 'Security Policy Framework',
    desc: 'Penyusunan hierarki kebijakan, pedoman teknis, dan prosedur operasional yang mudah dipahami dan ditegakkan.',
    highlights: ['Struktur dokumen berlapis', 'SOP penggunaan fasilitas TI wajar', 'Prosedur penanganan insiden']
  },
  {
    title: 'ISO/IEC 27001 Readiness',
    desc: 'Pendampingan pemenuhan seluruh klausul dan kontrol sistem manajemen keamanan informasi untuk kesiapan audit formal.',
    highlights: ['Gap analysis komprehensif', 'Penyusunan Statement of Applicability', 'Simulasi audit internal SMKI']
  },
  {
    title: 'Security Awareness Advisory',
    desc: 'Pendampingan penyusunan silabus edukasi kesadaran keamanan informasi untuk meminimalkan risiko ancaman rekayasa sosial (phishing).',
    highlights: ['Materi edukasi interaktif', 'Simulasi kesadaran serangan siber', 'Uji pemahaman staf berkala']
  },
  {
    title: 'IT Governance & Compliance',
    desc: 'Penataan alur persetujuan, manajemen perubahan, dokumentasi sistem, dan akuntabilitas audit teknologi informasi.',
    highlights: ['Struktur delegasi wewenang', 'Manajemen perubahan (change control)', 'Kesiapan data dukung pemeriksaan']
  },
  {
    title: 'Security Improvement Roadmap',
    desc: 'Penyusunan rencana kerja bertahap multi-tahun guna memperkuat maturitas keamanan secara realistis sesuai anggaran.',
    highlights: ['Inisiatif Quick Wins', 'Penganggaran terukur berfase', 'Penetapan metrik pencapaian (KPI/KRI)']
  }
];

export const referenceFrameworks = [
  {
    name: 'ISO/IEC 27001',
    description: 'Standar internasional terkemuka untuk Sistem Manajemen Keamanan Informasi (SMKI), menyediakan spesifikasi sistematis untuk mengelola data sensitif perusahaan.',
    role: 'Digunakan sebagai rujukan utama dalam perancangan tata kelola, klausul manajemen, dan kontrol Annex A.'
  },
  {
    name: 'NIST Cybersecurity Framework (CSF)',
    description: 'Kerangka kerja dari National Institute of Standards and Technology yang terdiri dari 6 fungsi inti: Govern, Identify, Protect, Detect, Respond, dan Recover.',
    role: 'Digunakan sebagai acuan pelengkap dalam penataan kapabilitas respon dan deteksi ancaman operasional.'
  },
  {
    name: 'CIS Critical Security Controls',
    description: 'Kumpulan rekomendasi tindakan preskriptif yang diprioritaskan untuk menangani serangan siber paling umum di lingkungan komputasi modern.',
    role: 'Digunakan sebagai panduan teknis penerapan hardening perangkat, sistem operasi, dan kontrol jaringan.'
  }
];
