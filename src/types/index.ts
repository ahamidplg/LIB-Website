export interface CompanyInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  positioning: string;
  nib: string;
  address: {
    street: string;
    subdistrict: string; // Kelurahan
    district: string; // Kecamatan
    city: string;
    province: string;
    country: string;
  };
  email: string;
  vision: string;
  missions: string[];
  coreValues: {
    title: string;
    description: string;
  }[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Software & Digital Solutions' | 'IT Infrastructure' | 'Technology Solutions';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  useCases: string[];
  benefits: string[];
  statusNote: string;
}

export interface ServiceItem {
  id: string;
  category: 'IT Consulting & Governance' | 'Cybersecurity Advisory' | 'Software & Application Development' | 'IT Infrastructure & Integration';
  title: string;
  shortDesc: string;
  overview: string;
  businessChallenges: string[];
  scope: string[];
  engagementProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  expectedDeliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ISOService {
  id: string;
  standard: string;
  title: string;
  tagline: string;
  description: string;
  scopeOfAssistance: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  clientChallenge: string;
  solutionApproach: string;
  scopeOfWork: string[];
  targetedOutcomes: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  isIllustrativeConcept: boolean;
  projectOverview: string;
  businessChallenge: string;
  scopeOfWork: string[];
  technologyUsed: string[];
  outcome: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'Cybersecurity' | 'ISO 27001' | 'ISO 9001' | 'IT Governance' | 'Software & Digital Transformation' | 'IT Infrastructure';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  isSampleContent: boolean;
  author: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string;
  subject: string;
  projectDescription: string;
  consent: boolean;
}
