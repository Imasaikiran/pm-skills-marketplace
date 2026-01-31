// Verify database schema
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function verifySchema() {
  console.log('🔍 Checking database schema...\n');

  // Try to query the categories table (which should have been seeded)
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*');

  if (catError) {
    console.error('❌ Categories table error:', catError.message);
  } else {
    console.log('✅ Categories table exists!');
    console.log(`   Found ${categories?.length || 0} categories`);
  }

  // Try to query the profiles table
  const { data: profiles, error: profError } = await supabase
    .from('profiles')
    .select('count')
    .limit(0);

  if (profError) {
    console.error('❌ Profiles table error:', profError.message);
  } else {
    console.log('✅ Profiles table exists!');
  }

  // Try to query the skills table
  const { data: skills, error: skillError } = await supabase
    .from('skills')
    .select('count')
    .limit(0);

  if (skillError) {
    console.error('❌ Skills table error:', skillError.message);
  } else {
    console.log('✅ Skills table exists!');
  }

  // Try to query the skill_reviews table
  const { data: reviews, error: revError } = await supabase
    .from('skill_reviews')
    .select('count')
    .limit(0);

  if (revError) {
    console.error('❌ Skill reviews table error:', revError.message);
  } else {
    console.log('✅ Skill reviews table exists!');
  }

  // Try to query the user_skills table
  const { data: userSkills, error: usError } = await supabase
    .from('user_skills')
    .select('count')
    .limit(0);

  if (usError) {
    console.error('❌ User skills table error:', usError.message);
  } else {
    console.log('✅ User skills table exists!');
  }

  // Try to query the skill_usage table
  const { data: usage, error: usageError } = await supabase
    .from('skill_usage')
    .select('count')
    .limit(0);

  if (usageError) {
    console.error('❌ Skill usage table error:', usageError.message);
  } else {
    console.log('✅ Skill usage table exists!');
  }
}

verifySchema()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Verification failed:', error);
    process.exit(1);
  });
