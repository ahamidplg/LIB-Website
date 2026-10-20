import { PortfolioItem } from '../types';

export const portfolioNotice = {
  label: 'Portfolio examples — illustrative concepts',
  explanation: 'Studi kasus berikut merupakan konsep ilustratif metodologi implementasi untuk memberikan gambaran ruang lingkup pekerjaan dan pendekatan teknis LIB. Data nama klien, nilai proyek, dan testimoni tidak dicantumkan demi menjaga kerahasiaan dan kepatuhan transparansi informasi sebelum verifikasi formal.',
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'concept-is-audit-readiness',
    title: 'Pendampingan Kesiapan Audit Sistem Manajemen Keamanan Informasi (ISMS)',
    category: 'ISO Consulting & Cybersecurity',
    isIllustrativeConcept: true,
    projectOverview: 'Konsep pelaksanaan pendampingan komprehensif bagi entitas bisnis yang mengelola data sensitif dalam mempersiapkan pemenuhan klausul dan kontrol keamanan informasi berstandar internasional.',
    businessChallenge: 'Organisasi membutuhkan kerangka kerja keamanan informasi formal guna memenuhi ekspektasi regulasi dan mitra korporat, namun belum memiliki inventaris aset terstruktur, metodologi penilaian risiko, maupun kebijakan tertulis yang terstandarisasi.',
    scopeOfWork: [
      'Pelaksanaan Gap Assessment terhadap seluruh klausul dan kontrol acuan',
      'Penyusunan inventaris aset informasi dan metodologi penilaian risiko (Risk Assessment)',
      'Perumusan Rencana Penanganan Risiko (Risk Treatment Plan) dan Statement of Applicability (SoA)',
      'Penyusunan paket dokumen kebijakan keamanan dan prosedur operasional baku',
      'Pendampingan simulasi audit internal dan penyusunan tinjauan manajemen'
    ],
    technologyUsed: [
      'ISO/IEC 27001 Controls Framework',
      'Information Security Risk Assessment Matrix',
      'Documented Information Repository System'
    ],
    outcome: 'Terbangunnya tata kelola keamanan informasi yang terstruktur, pemahaman peran yang jelas di antara tim kerja, serta kesiapan dokumen dan rekam bukti saat menghadapi proses audit sertifikasi independen.'
  },
  {
    id: 'concept-workflow-automation',
    title: 'Digitalisasi Alur Kerja Dokumen dan Sistem Persetujuan Terpadu',
    category: 'Software & Digital Solutions',
    isIllustrativeConcept: true,
    projectOverview: 'Konsep perancangan dan implementasi aplikasi web internal untuk mentransformasi alur disposisi dokumen dan formulir operasional dari sistem manual menjadi sistem digital terpusat.',
    businessChallenge: 'Waktu siklus persetujuan berkas operasional antar divisi memakan waktu berhari-hari akibat proses fisik dan penumpukan formulir kertas, sehingga menghambat respon cepat terhadap kebutuhan lapangan.',
    scopeOfWork: [
      'Analisis alur birokrasi berkas eksisting dan perancangan skema alur digital berbasis aturan (rule-based)',
      'Pengembangan portal web responsif dengan autentikasi berbasis peran (RBAC)',
      'Fitur validasi formulir digital, pelacakan riwayat (audit trail), dan notifikasi otomatis',
      'Pengujian fungsional terpadu dan bimbingan teknis bagi staf administrasi'
    ],
    technologyUsed: [
      'React & TypeScript',
      'Tailwind CSS UI Architecture',
      'RESTful Service Layer & Relational Database',
      'Automated Role-Based Access Control'
    ],
    outcome: 'Proses persetujuan dokumen dapat dipantau posisinya secara waktu nyata (real-time tracking), mengurangi potensi berkas terselip, dan memangkas waktu pemrosesan dokumen secara terukur.'
  },
  {
    id: 'concept-network-segregation',
    title: 'Modernisasi Infrastruktur Jaringan & Penguatan Perimeter Kantor',
    category: 'IT Infrastructure & Integration',
    isIllustrativeConcept: true,
    projectOverview: 'Konsep restrukturisasi topologi jaringan lokal gedung kantor, penataan pengkabelan terstruktur, serta segmentasi lalu lintas data kerja dan tamu.',
    businessChallenge: 'Jaringan sering mengalami kongesti trafik dan tidak adanya pemisahan antara koneksi Wi-Fi publik dengan jaringan server basis data keuangan, menimbulkan potensi risiko keamanan data serius.',
    scopeOfWork: [
      'Survei topologi eksisting dan identifikasi titik-titik bottleneck bandwidth',
      'Perancangan segmentasi Virtual LAN (VLAN) untuk memisahkan jaringan server, staf, dan tamu',
      'Konfigurasi Managed Switch dan penguatan aturan firewall perimeter',
      'Standarisasi labelisasi kabel jaringan dan pembuatan buku dokumentasi topologi'
    ],
    technologyUsed: [
      'Managed Switch Layer 2/3',
      'VLAN & Inter-VLAN Routing Protocol',
      'Enterprise Firewall Configuration',
      'Structured Cabling Standards'
    ],
    outcome: 'Stabilitas koneksi jaringan internal meningkat, trafik data kritis terisolasi dari akses publik tanpa otorisasi, dan kemudahan bagi staf teknis dalam melakukan pemeliharaan berkat dokumentasi jaringan yang rapi.'
  },
  {
    id: 'concept-qms-process-standardization',
    title: 'Standardisasi Alur Proses Mutu Operasional Berbasis ISO 9001',
    category: 'ISO Consulting',
    isIllustrativeConcept: true,
    projectOverview: 'Konsep pendampingan perancangan Sistem Manajemen Mutu untuk menyelaraskan alur kerja antar-departemen serta memastikan konsistensi standar layanan kepada pelanggan.',
    businessChallenge: 'Perbedaan standar kerja antar staf dan ketiadaan instrumen pemantauan mutu formal menyebabkan sering terjadinya komplain pelanggan dan ketidakjelasan penanganan ketidaksesuaian.',
    scopeOfWork: [
      'Pemetaan proses bisnis (Business Process Mapping) dari penerimaan pesanan hingga purna jual',
      'Penyusunan dokumen SOP terpadu dan matriks sasaran mutu (KPI) per divisi',
      'Penerapan formulir penanganan komplain dan evaluasi tindakan perbaikan (CAPA)',
      'Pelatihan audit internal mutu bagi perwakilan tiap departemen'
    ],
    technologyUsed: [
      'ISO 9001 Quality Framework',
      'Process Interaction Mapping Methodology',
      'Corrective Action Tracking Framework'
    ],
    outcome: 'Setiap divisi memiliki acuan kerja baku yang terukur, mekanisme penanganan ketidaksesuaian terdokumentasi dengan jelas, dan terbentuk kesiapan menghadapi evaluasi mutu berkala.'
  }
];
