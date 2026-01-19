export interface PersonalInfo {
  name: string;
  location: string;
  origin: string;
  headline: string;
  bio: string;
  links: {
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  awards?: string[];
  coursework?: string[];
  minor?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'research' | 'internship' | 'other';
  bullets: string[];
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  category: 'ml' | 'nlp' | 'quant' | 'tools';
  skills: string[];
  description: string;
  problem: string;
  approach: string;
  results: string;
  nextSteps?: string;
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Achievement {
  title: string;
  institution: string;
  period: string;
  description: string;
  category: 'academic' | 'competition' | 'leadership' | 'other';
}

export interface Research {
  title: string;
  institution: string;
  period: string;
  description: string;
  modules: {
    name: string;
    description: string;
  }[];
  impact: string;
}

export interface QuantInterest {
  title: string;
  description: string;
  concepts: string[];
}

export interface Content {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  research: Research;
  quantInterests: QuantInterest[];
}
