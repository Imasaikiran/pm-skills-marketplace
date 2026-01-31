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

  const skillsPath = path.join(__dirname, 'skills_data.json');
  const skillsData = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));

  // Add file_url to each skill
  const enrichedSkills = skillsData.map(skill => ({
    ...skill,
    file_url: `/skills/${skill.slug}.md`
  }));

  console.log(`📊 Found ${enrichedSkills.length} skills to import\n`);

  console.log('🗑️  Deleting existing skills...');
  await supabase.from('skills').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  console.log('✅ Existing skills deleted\n');

  console.log('📥 Importing skills...');
  
  let successCount = 0;
  const batchSize = 50;

  for (let i = 0; i < enrichedSkills.length; i += batchSize) {
    const batch = enrichedSkills.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;

    const { error } = await supabase.from('skills').insert(batch);

    if (error) {
      console.error(`❌ Error in batch ${batchNum}:`, error.message);
    } else {
      successCount += batch.length;
      console.log(`✅ Batch ${batchNum}: ${batch.length} skills imported`);
    }
  }

  console.log(`\n🎉 SUCCESS! Imported ${successCount} skills!`);
  console.log('🌐 Refresh: http://localhost:3000/skills\n');
}

importSkills().catch(console.error);
