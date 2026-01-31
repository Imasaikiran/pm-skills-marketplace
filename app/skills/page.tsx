import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import SkillsPageClient from './page-enhanced';
import { Skill, Category } from '@/types/database';

export const metadata: Metadata = {
  title: 'All Frameworks | Slashworks',
  description: '150+ proven product frameworks as slash commands for Claude Code, Cursor, and AI agents.',
};

export const revalidate = 60;

export default async function SkillsPage() {
  const supabase = await createClient();

  const { data: skills } = await supabase
    .from('skills')
    .select('*')
    .order('downloads', { ascending: false }) as { data: Skill[] | null };

  // Get actual category counts from skills data
  const { data: categoryData } = await supabase
    .from('skills')
    .select('category')
    .then(result => {
      const counts: Record<string, number> = {};
      result.data?.forEach((skill: { category: string }) => {
        counts[skill.category] = (counts[skill.category] || 0) + 1;
      });
      return { data: Object.entries(counts).map(([name, count]) => ({ name, skill_count: count })) as Category[] };
    });

  const categories = categoryData || [];

  return <SkillsPageClient skills={skills || []} categories={categories} />;
}
