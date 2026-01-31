export interface Skill {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  level: string;
  downloads: number;
  rating: number;
  premium: boolean;
  file_url: string;
  icon?: string;
  long_description?: string;
  what_you_learn?: string[];
  prerequisites?: string[];
  use_cases?: string[];
  includes?: string[];
  usage_instructions?: string;
  file_size?: string;
  difficulty_level?: string;
  estimated_time?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  name: string;
  skill_count: number;
}
