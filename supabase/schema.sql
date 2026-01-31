-- PM Skills Marketplace Database Schema
-- This file contains all table definitions for Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS TABLE (Extended from Supabase Auth)
-- ============================================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  company TEXT,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'team', 'enterprise')),
  subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'cancelled', 'expired', 'trialing')),
  trial_ends_at TIMESTAMP WITH TIME ZONE,
  stripe_customer_id TEXT,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Row Level Security for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- ============================================
-- SKILLS TABLE
-- ============================================
CREATE TABLE public.skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  premium BOOLEAN DEFAULT false,
  trending BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  version TEXT DEFAULT '1.0.0',
  file_url TEXT NOT NULL,
  file_size TEXT,
  icon TEXT,
  color TEXT,

  -- Stats
  downloads INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER DEFAULT 0,

  -- Metadata
  author_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,

  -- Content
  what_you_learn TEXT[],
  prerequisites TEXT[],
  includes TEXT[],
  usage_instructions TEXT,

  -- Tags and search
  tags TEXT[],
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(category, '')), 'C')
  ) STORED
);

-- Indexes for performance
CREATE INDEX idx_skills_slug ON public.skills(slug);
CREATE INDEX idx_skills_category ON public.skills(category);
CREATE INDEX idx_skills_premium ON public.skills(premium);
CREATE INDEX idx_skills_trending ON public.skills(trending);
CREATE INDEX idx_skills_search ON public.skills USING GIN(search_vector);
CREATE INDEX idx_skills_rating ON public.skills(rating DESC);
CREATE INDEX idx_skills_downloads ON public.skills(downloads DESC);

-- Row Level Security
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Skills are viewable by everyone" ON public.skills
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert skills" ON public.skills
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can update skills" ON public.skills
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- SKILL REVIEWS TABLE
-- ============================================
CREATE TABLE public.skill_reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(skill_id, user_id) -- One review per user per skill
);

-- Indexes
CREATE INDEX idx_reviews_skill ON public.skill_reviews(skill_id);
CREATE INDEX idx_reviews_user ON public.skill_reviews(user_id);
CREATE INDEX idx_reviews_rating ON public.skill_reviews(rating DESC);

-- Row Level Security
ALTER TABLE public.skill_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Reviews are viewable by everyone" ON public.skill_reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own reviews" ON public.skill_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON public.skill_reviews
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" ON public.skill_reviews
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- SKILL USAGE ANALYTICS TABLE
-- ============================================
CREATE TABLE public.skill_usage (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('install', 'execute', 'uninstall', 'error', 'view')),
  session_id TEXT,
  execution_time_ms INTEGER,
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Indexes for analytics queries
CREATE INDEX idx_usage_skill ON public.skill_usage(skill_id);
CREATE INDEX idx_usage_user ON public.skill_usage(user_id);
CREATE INDEX idx_usage_event ON public.skill_usage(event_type);
CREATE INDEX idx_usage_created ON public.skill_usage(created_at DESC);

-- Row Level Security
ALTER TABLE public.skill_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own usage" ON public.skill_usage
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Anyone can insert usage events" ON public.skill_usage
  FOR INSERT WITH CHECK (true);

-- ============================================
-- USER INSTALLED SKILLS TABLE
-- ============================================
CREATE TABLE public.user_skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE NOT NULL,
  installed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_used_at TIMESTAMP WITH TIME ZONE,
  use_count INTEGER DEFAULT 0,
  favorite BOOLEAN DEFAULT false,
  UNIQUE(user_id, skill_id)
);

-- Indexes
CREATE INDEX idx_user_skills_user ON public.user_skills(user_id);
CREATE INDEX idx_user_skills_skill ON public.user_skills(skill_id);
CREATE INDEX idx_user_skills_favorite ON public.user_skills(favorite) WHERE favorite = true;

-- Row Level Security
ALTER TABLE public.user_skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own installed skills" ON public.user_skills
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can install skills" ON public.user_skills
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own skill installations" ON public.user_skills
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can uninstall their skills" ON public.user_skills
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- CATEGORIES TABLE
-- ============================================
CREATE TABLE public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  skill_count INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone" ON public.categories
  FOR SELECT USING (true);

-- ============================================
-- FUNCTIONS AND TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON public.skills
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skill_reviews_updated_at BEFORE UPDATE ON public.skill_reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update skill stats when review is added/updated/deleted
CREATE OR REPLACE FUNCTION update_skill_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.skills
  SET
    rating = (SELECT AVG(rating)::DECIMAL(3,2) FROM public.skill_reviews WHERE skill_id = COALESCE(NEW.skill_id, OLD.skill_id)),
    review_count = (SELECT COUNT(*) FROM public.skill_reviews WHERE skill_id = COALESCE(NEW.skill_id, OLD.skill_id))
  WHERE id = COALESCE(NEW.skill_id, OLD.skill_id);
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_skill_rating_on_review_change
AFTER INSERT OR UPDATE OR DELETE ON public.skill_reviews
FOR EACH ROW EXECUTE FUNCTION update_skill_rating();

-- Function to increment download count
CREATE OR REPLACE FUNCTION increment_skill_downloads(skill_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.skills
  SET downloads = downloads + 1
  WHERE id = skill_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- SEED DATA FOR CATEGORIES
-- ============================================
INSERT INTO public.categories (name, slug, description, icon, color, sort_order) VALUES
  ('Discovery & Research', 'discovery-research', 'User research, competitive analysis, market sizing', 'Lightbulb', 'from-purple-500 to-pink-500', 1),
  ('Strategy & Vision', 'strategy-vision', 'Product vision, OKRs, positioning, business models', 'Target', 'from-indigo-500 to-purple-500', 2),
  ('Prioritization', 'prioritization', 'RICE, MoSCoW, Kano, value vs effort frameworks', 'CheckCircle2', 'from-blue-500 to-cyan-500', 3),
  ('Roadmapping', 'roadmapping', 'Now-Next-Later, story mapping, release planning', 'LineChart', 'from-orange-500 to-red-500', 4),
  ('Metrics & Analytics', 'metrics-analytics', 'AARRR, cohort analysis, A/B testing, LTV:CAC', 'TrendingUp', 'from-green-500 to-emerald-500', 5),
  ('UX & Design', 'ux-design', 'Design critique, prototyping, accessibility', 'Heart', 'from-pink-500 to-rose-500', 6),
  ('Stakeholder Management', 'stakeholder-management', 'Executive communication, conflict resolution', 'Users', 'from-yellow-500 to-orange-500', 7),
  ('Agile & Execution', 'agile-execution', 'Sprint planning, user stories, retrospectives', 'Zap', 'from-amber-500 to-yellow-500', 8),
  ('Go-to-Market', 'go-to-market', 'Launch planning, pricing, sales enablement', 'Rocket', 'from-red-500 to-pink-500', 9),
  ('Technical Collaboration', 'technical-collaboration', 'API docs, tech specs, architecture reviews', 'Code', 'from-cyan-500 to-blue-500', 10),
  ('Customer Success', 'customer-success', 'Adoption tracking, churn analysis, NPS', 'UserCheck', 'from-emerald-500 to-green-500', 11),
  ('Career & Leadership', 'career-leadership', 'Interview prep, mentorship, executive presence', 'Award', 'from-violet-500 to-purple-500', 12);

-- ============================================
-- INITIAL ADMIN USER (Update after first signup)
-- ============================================
-- After creating your first user, run:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your@email.com';

-- ============================================
-- ANALYTICS VIEWS
-- ============================================

-- Most popular skills
CREATE OR REPLACE VIEW popular_skills AS
SELECT
  s.*,
  COUNT(DISTINCT us.user_id) as active_user_count,
  COUNT(DISTINCT CASE WHEN su.event_type = 'install' THEN su.user_id END) as install_count
FROM public.skills s
LEFT JOIN public.user_skills us ON s.id = us.skill_id
LEFT JOIN public.skill_usage su ON s.id = su.skill_id
GROUP BY s.id
ORDER BY s.downloads DESC;

-- Trending skills (high recent activity)
CREATE OR REPLACE VIEW trending_skills AS
SELECT
  s.*,
  COUNT(*) as recent_activity
FROM public.skills s
JOIN public.skill_usage su ON s.id = su.skill_id
WHERE su.created_at >= NOW() - INTERVAL '7 days'
GROUP BY s.id
HAVING COUNT(*) > 10
ORDER BY recent_activity DESC;
