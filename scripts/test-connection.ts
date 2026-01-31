// Test Supabase connection
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key (first 20 chars):', supabaseServiceKey?.substring(0, 20));

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testConnection() {
  // Test 1: List all tables
  const { data: tables, error: tablesError } = await supabase
    .from('skills')
    .select('count')
    .limit(0);

  if (tablesError) {
    console.error('❌ Connection error:', tablesError);
  } else {
    console.log('✅ Connection successful!');
  }

  // Test 2: Try to insert a simple record
  const testSkill = {
    slug: 'test-skill',
    name: 'Test Skill',
    description: 'A test skill',
    category: 'Test',
    level: 'Beginner' as const,
    file_url: 'https://example.com/test.md',
  };

  const { data: insertData, error: insertError } = await supabase
    .from('skills')
    .insert(testSkill)
    .select();

  if (insertError) {
    console.error('❌ Insert error:', insertError);
  } else {
    console.log('✅ Insert successful!', insertData);

    // Clean up test record
    await supabase.from('skills').delete().eq('slug', 'test-skill');
    console.log('✅ Test record cleaned up');
  }
}

testConnection()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Test failed:', error);
    process.exit(1);
  });
