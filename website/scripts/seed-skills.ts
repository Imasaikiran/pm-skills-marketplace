// Script to seed the database with initial PM skills
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../lib/supabase/database.types';

// Load environment variables from .env.local
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

const skills = [
  {
    slug: 'rice-framework',
    name: 'RICE Framework',
    description: 'Use RICE framework (Reach, Impact, Confidence, Effort) to prioritize features and initiatives with data-driven scoring',
    long_description: `The RICE framework is a prioritization method that helps product teams make data-driven decisions about which features to build next. It was created by Intercom and is now used by thousands of product teams worldwide.

RICE stands for:
- **Reach:** How many people will this impact over a time period?
- **Impact:** How much will this impact each person?
- **Confidence:** How certain are you about these estimates?
- **Effort:** How much team time will this require?

The formula is simple: **RICE Score = (Reach × Impact × Confidence) / Effort**

Higher RICE scores indicate higher-priority items that should be tackled first.`,
    category: 'Prioritization',
    level: 'Intermediate' as const,
    premium: false,
    trending: true,
    featured: true,
    version: '1.2.0',
    file_url: 'https://raw.githubusercontent.com/pm-skills-marketplace/skills/main/prioritization/rice-framework/SKILL.md',
    file_size: '2.8 KB',
    icon: 'Target',
    color: 'from-blue-500 to-cyan-500',
    downloads: 12450,
    rating: 4.9,
    what_you_learn: [
      'How to calculate RICE scores for features and initiatives',
      'When to use RICE vs. other prioritization frameworks',
      'How to estimate Reach, Impact, Confidence, and Effort accurately',
      'How to present RICE results to stakeholders',
      'Common pitfalls and how to avoid them',
      'Advanced variations (weighted RICE, B2B-focused)',
    ],
    prerequisites: [
      'Basic understanding of product prioritization',
      'Familiarity with your product\'s user base',
      'Access to product analytics (helpful but not required)',
    ],
    includes: [
      'Complete RICE framework guide (2,800+ lines)',
      'Interactive scoring templates',
      'Question frameworks for each component',
      'Output templates with examples',
      'Best practices and anti-patterns',
      'Integration guides (OKRs, Story Mapping)',
    ],
    usage_instructions: 'To use this skill in Claude Code: 1. Install to ~/.claude/skills/ 2. Launch Claude Code 3. Type: /rice-framework 4. Provide features to prioritize',
    tags: ['prioritization', 'frameworks', 'rice', 'decision-making', 'data-driven'],
  },
  {
    slug: 'user-interview-guide',
    name: 'User Interview Guide',
    description: 'Conduct effective user interviews using Jobs-to-be-Done framework and best practice question techniques',
    long_description: `Master the art of user interviews with this comprehensive guide based on the Jobs-to-be-Done (JTBD) framework. Learn to uncover real user needs, avoid common pitfalls, and extract actionable insights that drive product decisions.

This skill teaches you how to conduct interviews that reveal actual user behavior rather than hypothetical preferences, using proven techniques from leading product teams.`,
    category: 'Discovery & Research',
    level: 'Beginner' as const,
    premium: false,
    trending: true,
    featured: true,
    version: '1.0.0',
    file_url: 'https://raw.githubusercontent.com/pm-skills-marketplace/skills/main/discovery-research/user-interview-guide/SKILL.md',
    file_size: '2.4 KB',
    icon: 'Users',
    color: 'from-purple-500 to-pink-500',
    downloads: 9821,
    rating: 4.8,
    what_you_learn: [
      'Jobs-to-be-Done interview framework',
      'How to ask open-ended questions that reveal insights',
      'The "5 Whys" technique for deep exploration',
      'How to avoid leading questions and bias',
      'Interview structure and timing (60-minute format)',
      'Note-taking and synthesis techniques',
    ],
    prerequisites: [
      'Basic understanding of user research',
      'Ability to schedule and conduct video calls',
    ],
    includes: [
      'Complete JTBD interview guide (2,400+ lines)',
      'Discussion guide templates',
      'Question libraries (good vs. bad examples)',
      'Note-taking templates',
      'Analysis frameworks',
    ],
    usage_instructions: 'Type /user-interview-guide in Claude Code, then specify your research goal',
    tags: ['user-research', 'interviews', 'jtbd', 'discovery', 'qualitative'],
  },
  {
    slug: 'now-next-later-roadmap',
    name: 'Now-Next-Later Roadmap',
    description: 'Create flexible roadmaps without timeline commitments while communicating product strategy effectively',
    long_description: `Learn to build outcome-focused roadmaps that avoid the pitfalls of date-based planning. The Now-Next-Later framework helps you communicate product strategy while maintaining flexibility to respond to learning and change.

Perfect for modern product teams that want to escape the tyranny of Gantt charts while still providing stakeholders with clear visibility into product direction.`,
    category: 'Roadmapping',
    level: 'Intermediate' as const,
    premium: false,
    trending: false,
    featured: true,
    version: '1.1.0',
    file_url: 'https://raw.githubusercontent.com/pm-skills-marketplace/skills/main/roadmapping/now-next-later-roadmap/SKILL.md',
    file_size: '2.9 KB',
    icon: 'LineChart',
    color: 'from-orange-500 to-red-500',
    downloads: 7342,
    rating: 4.7,
    what_you_learn: [
      'Why Now-Next-Later beats timeline-based roadmaps',
      'How to structure each horizon (NOW/NEXT/LATER)',
      'Communicating with different stakeholders',
      'Handling the "when will it ship?" question',
      'Integrating with OKRs and RICE prioritization',
      'Advanced techniques (themes, confidence levels)',
    ],
    prerequisites: [
      'Basic roadmapping experience',
      'Understanding of agile principles',
    ],
    includes: [
      'Complete roadmapping guide (2,900+ lines)',
      'Roadmap templates for different audiences',
      'Stakeholder communication scripts',
      'Integration guides (OKRs, Story Mapping)',
    ],
    usage_instructions: 'Type /now-next-later-roadmap and specify your product or area',
    tags: ['roadmap', 'planning', 'strategy', 'agile', 'outcomes'],
  },
  {
    slug: 'aarrr-pirate-metrics',
    name: 'AARRR Pirate Metrics',
    description: 'Analyze product growth using AARRR framework - Acquisition, Activation, Retention, Revenue, Referral',
    long_description: `Master the AARRR (Pirate Metrics) framework to analyze and optimize your entire product funnel. This comprehensive guide covers all five stages of the customer lifecycle with detailed metrics, benchmarks, and optimization strategies.

Created by Dave McClure for startups, AARRR is now the gold standard for product growth analysis at companies of all sizes.`,
    category: 'Metrics & Analytics',
    level: 'Intermediate' as const,
    premium: false,
    trending: true,
    featured: true,
    version: '1.0.0',
    file_url: 'https://raw.githubusercontent.com/pm-skills-marketplace/skills/main/metrics-analytics/aarrr-pirate-metrics/SKILL.md',
    file_size: '5.6 KB',
    icon: 'TrendingUp',
    color: 'from-green-500 to-emerald-500',
    downloads: 8654,
    rating: 4.9,
    what_you_learn: [
      'Complete AARRR framework (Acquisition → Referral)',
      'Key metrics and benchmarks for each stage',
      'How to calculate viral coefficient (K-factor)',
      'LTV:CAC analysis and unit economics',
      'Funnel visualization techniques',
      'Prioritizing improvements (retention first!)',
    ],
    prerequisites: [
      'Access to product analytics',
      'Basic understanding of funnels',
      'Familiarity with metrics like DAU, MAU',
    ],
    includes: [
      'Comprehensive AARRR guide (5,600+ lines)',
      'Metrics definitions and formulas',
      'Industry benchmarks',
      'Analysis templates',
      'Optimization frameworks',
    ],
    usage_instructions: 'Type /aarrr-pirate-metrics to analyze your product funnel',
    tags: ['metrics', 'growth', 'analytics', 'funnel', 'aarrr', 'pirate-metrics'],
  },
];

async function seedSkills() {
  console.log('🌱 Starting to seed skills...\n');

  for (const skill of skills) {
    console.log(`📦 Inserting: ${skill.name}...`);

    const { data, error } = await supabase
      .from('skills')
      .upsert(skill, { onConflict: 'slug' })
      .select();

    if (error) {
      console.error(`❌ Error inserting ${skill.name}:`, error.message);
      console.error('Full error:', error);
    } else {
      console.log(`✅ ${skill.name} inserted successfully!`);
    }
  }

  console.log('\n🎉 Seeding complete!');
  console.log('\n📊 Summary:');
  console.log(`- Total skills: ${skills.length}`);
  console.log(`- Free skills: ${skills.filter(s => !s.premium).length}`);
  console.log(`- Trending: ${skills.filter(s => s.trending).length}`);
  console.log(`- Featured: ${skills.filter(s => s.featured).length}`);
}

seedSkills()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  });
