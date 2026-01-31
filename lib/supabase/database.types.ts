// TypeScript types for Supabase database
// Generated from database schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          company: string | null;
          role: string | null;
          created_at: string;
          updated_at: string;
          subscription_tier: 'free' | 'pro' | 'team' | 'enterprise';
          subscription_status: 'active' | 'cancelled' | 'expired' | 'trialing';
          trial_ends_at: string | null;
          stripe_customer_id: string | null;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          company?: string | null;
          role?: string | null;
          created_at?: string;
          updated_at?: string;
          subscription_tier?: 'free' | 'pro' | 'team' | 'enterprise';
          subscription_status?: 'active' | 'cancelled' | 'expired' | 'trialing';
          trial_ends_at?: string | null;
          stripe_customer_id?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          company?: string | null;
          role?: string | null;
          created_at?: string;
          updated_at?: string;
          subscription_tier?: 'free' | 'pro' | 'team' | 'enterprise';
          subscription_status?: 'active' | 'cancelled' | 'expired' | 'trialing';
          trial_ends_at?: string | null;
          stripe_customer_id?: string | null;
        };
      };
      skills: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string;
          long_description: string | null;
          category: string;
          level: 'Beginner' | 'Intermediate' | 'Advanced';
          premium: boolean;
          trending: boolean;
          featured: boolean;
          version: string;
          file_url: string;
          file_size: string | null;
          icon: string | null;
          color: string | null;
          downloads: number;
          active_users: number;
          rating: number;
          review_count: number;
          author_id: string | null;
          created_at: string;
          updated_at: string;
          published_at: string | null;
          what_you_learn: string[] | null;
          prerequisites: string[] | null;
          includes: string[] | null;
          usage_instructions: string | null;
          tags: string[] | null;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description: string;
          long_description?: string | null;
          category: string;
          level: 'Beginner' | 'Intermediate' | 'Advanced';
          premium?: boolean;
          trending?: boolean;
          featured?: boolean;
          version?: string;
          file_url: string;
          file_size?: string | null;
          icon?: string | null;
          color?: string | null;
          downloads?: number;
          active_users?: number;
          rating?: number;
          review_count?: number;
          author_id?: string | null;
          created_at?: string;
          updated_at?: string;
          published_at?: string | null;
          what_you_learn?: string[] | null;
          prerequisites?: string[] | null;
          includes?: string[] | null;
          usage_instructions?: string | null;
          tags?: string[] | null;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string;
          long_description?: string | null;
          category?: string;
          level?: 'Beginner' | 'Intermediate' | 'Advanced';
          premium?: boolean;
          trending?: boolean;
          featured?: boolean;
          version?: string;
          file_url?: string;
          file_size?: string | null;
          icon?: string | null;
          color?: string | null;
          downloads?: number;
          active_users?: number;
          rating?: number;
          review_count?: number;
          author_id?: string | null;
          created_at?: string;
          updated_at?: string;
          published_at?: string | null;
          what_you_learn?: string[] | null;
          prerequisites?: string[] | null;
          includes?: string[] | null;
          usage_instructions?: string | null;
          tags?: string[] | null;
        };
      };
      skill_reviews: {
        Row: {
          id: string;
          skill_id: string;
          user_id: string;
          rating: number;
          comment: string | null;
          helpful_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          skill_id: string;
          user_id: string;
          rating: number;
          comment?: string | null;
          helpful_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          skill_id?: string;
          user_id?: string;
          rating?: number;
          comment?: string | null;
          helpful_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      skill_usage: {
        Row: {
          id: string;
          skill_id: string;
          user_id: string | null;
          event_type: 'install' | 'execute' | 'uninstall' | 'error' | 'view';
          session_id: string | null;
          execution_time_ms: number | null;
          error_message: string | null;
          metadata: Json | null;
          created_at: string;
          ip_address: string | null;
          user_agent: string | null;
        };
        Insert: {
          id?: string;
          skill_id: string;
          user_id?: string | null;
          event_type: 'install' | 'execute' | 'uninstall' | 'error' | 'view';
          session_id?: string | null;
          execution_time_ms?: number | null;
          error_message?: string | null;
          metadata?: Json | null;
          created_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
        Update: {
          id?: string;
          skill_id?: string;
          user_id?: string | null;
          event_type?: 'install' | 'execute' | 'uninstall' | 'error' | 'view';
          session_id?: string | null;
          execution_time_ms?: number | null;
          error_message?: string | null;
          metadata?: Json | null;
          created_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
      };
      user_skills: {
        Row: {
          id: string;
          user_id: string;
          skill_id: string;
          installed_at: string;
          last_used_at: string | null;
          use_count: number;
          favorite: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          skill_id: string;
          installed_at?: string;
          last_used_at?: string | null;
          use_count?: number;
          favorite?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          skill_id?: string;
          installed_at?: string;
          last_used_at?: string | null;
          use_count?: number;
          favorite?: boolean;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string | null;
          color: string | null;
          skill_count: number;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          color?: string | null;
          skill_count?: number;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          color?: string | null;
          skill_count?: number;
          sort_order?: number;
          created_at?: string;
        };
      };
    };
    Views: {
      popular_skills: {
        Row: {
          // Same as skills table with additional computed fields
          active_user_count: number;
          install_count: number;
        };
      };
      trending_skills: {
        Row: {
          // Same as skills table with additional computed fields
          recent_activity: number;
        };
      };
    };
    Functions: {
      increment_skill_downloads: {
        Args: { skill_uuid: string };
        Returns: void;
      };
    };
  };
}
