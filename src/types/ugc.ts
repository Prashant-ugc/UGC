export type CategoryType = 'all' | 'skincare' | 'tech' | 'wellness' | 'fashion';

export type AdFormatType = 
  | 'all' 
  | 'problem_solution' 
  | 'asmr_unboxing' 
  | 'aesthetic_review' 
  | 'hook_matrix' 
  | 'organic_storytime';

export interface UgcAdItem {
  id: string;
  title: string;
  brand: string;
  category: 'skincare' | 'tech' | 'wellness' | 'fashion';
  format: AdFormatType;
  formatLabel: string;
  platform: 'TikTok Spark Ad' | 'Meta Reel' | 'YouTube Short' | 'Amazon Video';
  duration: string;
  roas: string;
  hookRate: string;
  ctr: string;
  aspectRatio: '9:16';
  videoUrl?: string;
  thumbnailTheme: {
    bgGradient: string;
    accentColor: string;
    ambientGlow: string;
  };
  hookText: string;
  videoScript: {
    hook: string;
    problem: string;
    solution: string;
    cta: string;
  };
  captions: string[];
  metricsSummary: {
    views: string;
    spendScaled: string;
    cpaDrop: string;
  };
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  brand: string;
  metric: string;
  metricLabel: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  featured?: boolean;
  deliverables: string[];
  idealFor: string;
  turnaround: string;
}

export interface InquiryFormData {
  brandName: string;
  contactEmail: string;
  websiteUrl: string;
  platformFocus: string;
  budgetTier: string;
  timeline: string;
  projectBrief: string;
  selectedPackage?: string;
}
