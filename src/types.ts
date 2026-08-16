export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Web App' | 'AI & ML' | 'Mobile & Cloud';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  iconName: string;
  experienceYears?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectRef?: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
