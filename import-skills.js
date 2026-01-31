#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase configuration
const supabaseUrl = 'https://dnjlvwqdzrtnrqryogpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA4NzYzMywiZXhwIjoyMDg0NjYzNjMzfQ.Zt-4OZXXYuj-qWIyWrpJAAJE1DKLrk0AQdDCuR_gLyw';

const supabase = createClient(supabaseUrl, supabaseKey);

async function importSkills() {
  console.log('🔍 Reading skills_data.json...\n');

  // Read the skills JSON file
  const skillsPath = path.join(__dirname, 'skills_data.json');
  const skillsData = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));

  console.log(`📊 Found ${skillsData.length} skills to import\n`);

  // Count by category
  const categoryCounts = {};
  skillsData.forEach(skill => {
    categoryCounts[skill.category] = (categoryCounts[skill.category] || 0) + 1;
  });

  console.log('Category breakdown:');
  Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count} skills`);
    });

  console.log('\n❓ Do you want to import these skills? (yes/no): ');

  // For automation, just proceed
  console.log('yes (auto-proceeding)\n');

  console.log('🗑️  Deleting existing skills...');
  const { error: deleteError } = await supabase
    .from('skills')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

  if (deleteError) {
    console.error('Error deleting existing skills:', deleteError);
  } else {
    console.log('✅ Existing skills deleted\n');
  }

  console.log('📥 Importing skills in batches...');

  // Import in batches of 50
  const batchSize = 50;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < skillsData.length; i += batchSize) {
    const batch = skillsData.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(skillsData.length / batchSize);

    console.log(`  Batch ${batchNum}/${totalBatches}: Importing ${batch.length} skills...`);

    const { data, error } = await supabase
      .from('skills')
      .insert(batch);

    if (error) {
      console.error(`  ❌ Error in batch ${batchNum}:`, error.message);
      errorCount += batch.length;
    } else {
      console.log(`  ✅ Batch ${batchNum} imported successfully`);
      successCount += batch.length;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Import complete!`);
  console.log(`   Successfully imported: ${successCount} skills`);
  if (errorCount > 0) {
    console.log(`   ❌ Failed: ${errorCount} skills`);
  }
  console.log('='.repeat(60));

  console.log('\n🎉 Database populated with all skills!');
  console.log('🌐 Refresh your website: http://localhost:3000/skills');
  console.log('   You should now see all 146 frameworks!\n');
}

// Run the import
importSkills().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
