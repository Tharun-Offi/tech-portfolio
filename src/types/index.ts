export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ml' | 'systems' | 'all';
  type: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  iconName: string;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  description: string;
  highlights: string[];
  skills: string[];
  type: 'work';
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description: string;
  type: 'education';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon: string;
    description: string;
    color: string;
  }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  birthday: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

