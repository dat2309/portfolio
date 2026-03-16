export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  email: string;
  location: string;
  avatarUrl: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  funFacts: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "mobile" | "backend" | "tools";
  proficiency: number;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
