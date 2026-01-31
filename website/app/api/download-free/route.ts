import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

// Map of allowed free skills
const FREE_SKILLS: Record<string, string> = {
  'rice-framework.md': 'skills/prioritization/rice-framework.md',
  'user-interviews.md': 'skills/discovery-research/user-interviews.md',
  'aarrr-metrics.md': 'skills/metrics-analytics/aarrr-metrics.md',
  'ai-evals-testing.md': 'skills/ai-pm/ai-evals-testing.md',
  'sprint-planning.md': 'skills/agile-execution/sprint-planning.md',
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const skill = searchParams.get('skill');

    if (!skill || !FREE_SKILLS[skill]) {
      return new NextResponse('Skill not found or not available for free download', { status: 404 });
    }

    // Get the actual file path
    const skillPath = FREE_SKILLS[skill];
    const projectRoot = process.cwd();
    const fullPath = path.join(projectRoot, '..', skillPath);

    // Read the skill file
    const content = await readFile(fullPath, 'utf-8');

    // Return as downloadable file
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${skill}"`,
      },
    });
  } catch (error) {
    console.error('Free download error:', error);
    return new NextResponse('Error downloading skill', { status: 500 });
  }
}
