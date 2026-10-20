import { ISOService } from '../types';

export const isoHeroData = {
  headline: 'Build Stronger Management Systems. Prepare with Confidence.',
  subheadline: 'Pendampingan implementasi ISO yang terstruktur, berbasis kebutuhan organisasi, dan berorientasi pada perbaikan berkelanjutan.',
  disclaimer: 'CV Lintas Informatika Buana (LIB) bertindak sebagai konsultan dan pendamping persiapan implementasi sistem manajemen. Audit sertifikasi eksternal dan keputusan penerbitan sertifikat dilakukan secara independen oleh lembaga sertifikasi yang terakreditasi dan relevan. Kami tidak menjanjikan penerbitan sertifikat tanpa pemenuhan nyata atas persyaratan standar, dan CV LIB bukan merupakan lembaga sertifikasi (Certification Body).',
};

export const isoServices: ISOService[] = [
  {
    id: 'iso-27001',
    standard: 'ISO/IEC 27001',
    title: 'Information Security Management System (ISMS)',
    tagline: 'Membangun tata kelola perlindungan aset informasi, kerahasiaan, integritas, dan ketersediaan data.',
    description: 'Pendampingan komprehensif bagi organisasi yang ingin menerapkan Sistem Manajemen Keamanan Informasi (SMKI) berbasis ISO/IEC 27001 (edisi mutakhir). Dirancang adaptif terhadap skala organisasi mulai dari perbankan, teknologi, kesehatan, logistik, hingga instansi publik.',
    scopeOfAssistance: [
      'Gap Assessment postur keamanan informasi terhadap klausul dan kontrol standar',
      'Penetapan konteks organisasi dan ruang lingkup (scope) ISMS yang presisi',
      'Identifikasi kebutuhan dan ekspektasi pihak berkepentingan (interested parties)',
      'Information Security Risk Assessment (penilaian risiko berbasis aset dan ancaman)',
      'Penyusunan Rencana Penanganan Risiko (Risk Treatment Plan - RTP)',
      'Penyusunan Kebijakan, Pedoman, dan Standar Prosedur Operasional Keamanan Informasi',
      'Penyusunan Pernyataan Keberlakuan (Statement of Applicability - SoA)',
      'Pendampingan implementasi kontrol administratif, teknis, dan fisik',
      'Penetapan Sasaran Keamanan Informasi (Security Objectives) dan instrumen pengukurannya',
      'Pelatihan dan pendampingan pelaksanaan Audit Internal (Internal Audit Preparation)',
      'Pendampingan penyelenggaraan Tinjauan Manajemen (Management Review Preparation)',
      'Dukungan tindakan perbaikan (Corrective Action Support) atas temuan ketidaksesuaian',
      'Kesiapan menghadapi Audit Sertifikasi Eksternal (External Certification Audit Readiness)'
    ],
    deliverables: [
      'Dokumen Ruang Lingkup dan Manual SMKI Organisasi',
      'Laporan Hasil Gap Assessment & Rekomendasi Awal',
      'Metodologi & Laporan Information Security Risk Assessment',
      'Dokumen Statement of Applicability (SoA) Terverifikasi',
      'Paket Kebijakan & SOP Keamanan Informasi Terintegrasi',
      'Laporan dan Rekam Bukti Audit Internal SMKI',
      'Notulensi dan Tindak Lanjut Rapat Tinjauan Manajemen'
    ]
  },
  {
    id: 'iso-9001',
    standard: 'ISO 9001',
    title: 'Quality Management System (QMS)',
    tagline: 'Memastikan konsistensi mutu produk dan layanan melalui standardisasi proses kerja dan kepuasan pelanggan.',
    description: 'Pendampingan penyusunan dan implementasi Sistem Manajemen Mutu (SMM) berbasis standar ISO 9001 untuk membantu organisasi menata alur kerja proses bisnis, mencegah cacat layanan, dan membangun budaya perbaikan mutu berkelanjutan.',
    scopeOfAssistance: [
      'Gap Assessment kesesuaian proses kerja berjalan terhadap persyaratan standar ISO 9001',
      'Analisis konteks organisasi dan isu internal-eksternal yang relevan',
      'Pemetaan proses bisnis (Business Process Mapping) dan interaksi antar-proses',
      'Penetapan ruang lingkup QMS dan batasan penerapan sistem manajemen',
      'Penyusunan SOP, instruksi kerja, dan dokumentasi informasi mutu',
      'Penetapan Sasaran Mutu (Quality Objectives) dan Key Performance Indicators (KPI)',
      'Penilaian risiko dan peluang (Risk and Opportunity Assessment) operasional',
      'Pengendalian informasi terdokumentasi (Documented Information Control)',
      'Pelatihan dan pendampingan pelaksanaan Audit Internal Mutu',
      'Pendampingan pelaksanaan Rapat Tinjauan Manajemen berkala',
      'Mekanisme penanganan ketidaksesuaian dan tindakan perbaikan (Nonconformity & Corrective Action)',
      'Kesiapan menghadapi Audit Sertifikasi Mutu Eksternal (External Certification Audit Readiness)'
    ],
    deliverables: [
      'Manual Mutu dan Peta Proses Bisnis Organisasi (Process Map)',
      'Dokumen Analisis Risiko dan Peluang Operasional',
      'Paket Dokumen SOP dan Instruksi Kerja Lintas Divisi',
      'Daftar Sasaran Mutu dan Matriks Monitoring KPI',
      'Laporan Hasil Audit Internal Mutu dan Form Permintaan Tindakan Korektif (PTK)',
      'Notulen dan Rencana Tindak Lanjut Tinjauan Manajemen'
    ]
  }
];

export const isoConsultingStages = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Diskusi pendahuluan untuk memahami profil bisnis, ekspektasi manajemen, ruang lingkup yang diinginkan, dan komitmen sumber daya organisasi.',
  },
  {
    step: 2,
    title: 'Gap Assessment',
    description: 'Pemeriksaan lapangan dan komparasi terhadap standar ISO yang dituju untuk mengetahui persentase kesiapan dan daftar kesenjangan yang harus dipenuhi.',
  },
  {
    step: 3,
    title: 'Implementation Planning',
    description: 'Penyusunan jadwal kerja detail, alokasi peran tim internal, penanggung jawab dokumen, dan indikator pencapaian setiap tonggak waktu.',
  },
  {
    step: 4,
    title: 'Documentation Development',
    description: 'Penyusunan dan penyesuaian dokumen kebijakan, SOP, formulir kerja, dan manual sistem manajemen yang aplikatif dan tidak berbelit-belit.',
  },
  {
    step: 5,
    title: 'Implementation Assistance',
    description: 'Pendampingan langsung kepada staf dalam menerapkan SOP baru, mengisi rekam bukti (records), dan sosialisasi budaya kepatuhan standar.',
  },
  {
    step: 6,
    title: 'Internal Audit Readiness',
    description: 'Pelatihan auditor internal dan pelaksanaan simulasi audit internal untuk mendeteksi ketidaksesuaian serta memastikan tindakan korektif dilakukan.',
  },
  {
    step: 7,
    title: 'External Audit Coordination',
    description: 'Pendampingan tim klien saat menghadapi audit tahap 1 dan tahap 2 dari badan sertifikasi independen, serta bantuan penutupan temuan audit bila ada.',
  },
];
