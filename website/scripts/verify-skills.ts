// Verify skills in database
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../lib/supabase/database.types';

config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

async function verifySkills() {
  console.log('🔍 Checking skills in database...\n');

  const { data: skills, error } = await supabase
    .from('skills')
    .select('slug, name, category, level, downloads, rating, trending, featured')
    .order('name');

  if (error) {
    console.error('❌ Error fetching skills:', error);
    return;
  }

  console.log(`✅ Found ${skills.length} skills in database:\n`);

  skills.forEach((skill, index) => {
    console.log(`${index + 1}. ${skill.name}`);
    console.log(`   Slug: ${skill.slug}`);
    console.log(`   Category: ${skill.category}`);
    console.log(`   Level: ${skill.level}`);
    console.log(`   Downloads: ${skill.downloads}`);
    console.log(`   Rating: ${skill.rating}`);
    console.log(`   Trending: ${skill.trending ? '🔥' : '❌'}`);
    console.log(`   Featured: ${skill.featured ? '⭐' : '❌'}`);
    console.log('');
  });

  // Check categories
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('name, slug, skill_count')
    .order('sort_order');

  if (!catError) {
    console.log(`\n📂 Found ${categories.length} categories:`);
    categories.forEach(cat => {
      console.log(`   - ${cat.name} (${cat.skill_count} skills)`);
    });
  }
}

verifySkills()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Verification failed:', error);
    process.exit(1);
  });
