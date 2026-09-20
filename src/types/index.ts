export interface Sport {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  ageRange: string;
  sessions?: number;
  features: string[];
  levels?: string[];
}

export interface Offer {
  id: string;
  title: string;
  price?: string;
  sessionsCount?: string;
  sportsIncluded?: string;
  badge?: string;
  tagline?: string;
  description: string;
  features: string[];
  highlight?: string;
  popular?: boolean;
}

export interface ScheduleItem {
  id: string;
  sport: string;
  sportId: string;
  level?: string;
  day: string;
  dayEn?: string;
  time: string;
  timeEn?: string;
  duration?: string;
  coach?: string;
  location?: string;
  capacity?: number;
  enrolled?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Coach {
  id: string;
  name: string;
  sport: string;
  title: string;
  experience: string;
  image: string;
  achievements: string[];
}

export interface GoogleReview {
  id: string;
  name: string;
  text: string;
  sportTag?: string;
  rating: number;
  date?: string;
  initials: string;
  verified?: boolean;
}
