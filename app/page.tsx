import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { Skill } from '@/types/database';

export const metadata: Metadata = {
  title: 'Slashworks - 150+ Product Frameworks as Commands - $1',
  description: 'RICE, AARRR, User Interviews, AI Evals - 150+ proven frameworks as slash commands. Install in Claude Code, Cursor, any AI agent. $1 one-time.',
};

export const revalidate = 60;

export default async function HomePage() {
  const supabase = await createClient();
  const { data: skills } = await supabase.from('skills').select('*').order('downloads', { ascending: false }).limit(6) as { data: Skill[] | null };

  // Get actual category counts from files
  const { data: categoryData } = await supabase
    .from('skills')
    .select('category')
    .then(result => {
      const counts: Record<string, number> = {};
      result.data?.forEach((skill: { category: string }) => {
        counts[skill.category] = (counts[skill.category] || 0) + 1;
      });
      return { data: Object.entries(counts).map(([name, count]) => ({ name, skill_count: count })) };
    });

  const categories = categoryData || [];

  const categoryEmojis: Record<string, string> = {
    'Discovery & Research': '🔍',
    'AI PM': '🤖',
    'Strategy & Vision': '🎯',
    'Go-to-Market': '🚀',
    'Customer Success': '💚',
    'Prioritization': '⚡',
    'Metrics & Analytics': '📊',
    'Roadmapping': '🗺️',
    'Agile & Execution': '⚙️',
    'UX & Design': '🎨',
    'Technical Collaboration': '💻',
    'Stakeholder Management': '🤝',
    'Career & Leadership': '👑',
  };

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 py-4 px-6 sticky top-0 bg-[#0E0E11]/95 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">slashworks</Link>
          <Link
            href="/payment"
            className="bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition"
          >
            Get for $1 →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Frameworks you run,<br />
            not read.
          </h1>

          <p className="text-2xl text-gray-400 mb-10 max-w-3xl">
            150+ proven product frameworks as slash commands for Claude Code, Cursor, and AI agents.
          </p>

          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-6xl font-bold">$1</span>
            <span className="text-gray-500">one-time</span>
          </div>

          <Link
            href="/payment"
            className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-10 py-4 rounded-xl text-xl font-medium hover:bg-[#2563EB] transition"
          >
            Get all frameworks
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            ✓ Instant download  ✓ Works everywhere  ✓ No subscription
          </p>
        </div>
      </section>

      {/* What is this */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">What is this?</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Each framework is a complete guide in markdown. RICE prioritization. AARRR metrics. User interview guides. AI evals.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Install them in your AI tool. Type <code className="bg-gray-800 px-2 py-1 rounded text-[#3B82F6]">/rice-framework</code> → get the complete framework with formulas, templates, examples.
              </p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 font-mono text-sm">
              <div className="text-[#22C55E] mb-2">$ claude</div>
              <div className="text-gray-500 mb-3">&gt; /rice-framework</div>
              <div className="text-[#3B82F6] mb-2">📋 RICE Prioritization</div>
              <div className="text-gray-400 text-xs space-y-1">
                <div>Formula: (Reach × Impact × Confidence) / Effort</div>
                <div>✓ Scoring guide</div>
                <div>✓ Spreadsheet template</div>
                <div>✓ Examples: Airbnb, Intercom, Slack</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="font-bold mb-2 text-white">Complete guides</p>
              <p className="text-gray-400">Step-by-step instructions, formulas, decision trees</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="font-bold mb-2 text-white">Ready templates</p>
              <p className="text-gray-400">Copy-paste spreadsheets, checklists, documents</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="font-bold mb-2 text-white">Real examples</p>
              <p className="text-gray-400">Case studies from Airbnb, Stripe, Notion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular frameworks */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">Popular frameworks</h2>
          <p className="text-gray-400 mb-10">6 of 150+. Browse all below.</p>

          <div className="grid md:grid-cols-2 gap-4">
            {skills?.map((skill) => (
              <div key={skill.id} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-[#3B82F6] transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-500">{skill.category}</p>
                  </div>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-400">
                    {(skill.downloads / 1000).toFixed(1)}K
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All categories */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">All 13 categories</h2>
          <p className="text-gray-400 mb-10">150+ frameworks total</p>

          <div className="grid md:grid-cols-2 gap-3">
            {categories.sort((a, b) => (b.skill_count || 0) - (a.skill_count || 0)).map((cat) => (
              <div
                key={cat.name}
                className="flex items-center justify-between p-5 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-[#3B82F6] transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryEmojis[cat.name] || '📁'}</span>
                  <div>
                    <h3 className="font-bold text-white">{cat.name}</h3>
                    <p className="text-sm text-gray-500">{cat.skill_count || 0} frameworks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/skills" className="text-lg font-medium text-[#3B82F6] hover:underline inline-flex items-center gap-2">
              Browse all 150+ →
            </Link>
          </div>
        </div>
      </section>

      {/* How to install */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold mb-2 text-white">Pay $1 → Download</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instant email with ZIP file. All 150+ frameworks. One-time payment.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold mb-2 text-white">Copy to skills folder</h3>
              <div className="text-sm text-gray-400 leading-relaxed space-y-2">
                <p>Claude Code:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E]">~/.claude/skills/</code>
                <p className="mt-2">Cursor:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E]">~/.cursor/skills/</code>
              </div>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold mb-2 text-white">Use with /command</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Type slash + name:
              </p>
              <div className="bg-black/50 border border-gray-800 p-3 rounded text-xs font-mono space-y-1 text-[#3B82F6]">
                <div>/rice-framework</div>
                <div>/user-interviews</div>
                <div>/ai-evals-testing</div>
                <div>/aarrr-metrics</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="font-bold mb-2 text-white">Email includes:</p>
            <ul className="text-sm text-gray-400 space-y-1 ml-4">
              <li>✓ ZIP with all 150+ frameworks</li>
              <li>✓ Install guide for Claude, Cursor, all agents</li>
              <li>✓ Lifetime access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                "RICE framework alone saved me 3 hours. Having these as slash commands in Claude is brilliant."
              </p>
              <div>
                <p className="text-sm font-bold text-white">Sarah Chen</p>
                <p className="text-xs text-gray-500">Senior PM</p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                "AI evals, Cursor workflows, prompt engineering. Exactly what I needed. Works perfectly in my daily flow."
              </p>
              <div>
                <p className="text-sm font-bold text-white">Michael R.</p>
                <p className="text-xs text-gray-500">Product Lead</p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                "No fluff. Just frameworks with templates. Best dollar I spent."
              </p>
              <div>
                <p className="text-sm font-bold text-white">Priya Patel</p>
                <p className="text-xs text-gray-500">PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            150+ frameworks.<br />
            $1. Forever.
          </h2>

          <p className="text-xl text-gray-400 mb-10">
            Install in Claude Code, Cursor, any AI agent. Use with <code className="bg-gray-800 px-2 py-1 rounded text-[#3B82F6]">/command</code>.
          </p>

          <Link
            href="/payment"
            className="inline-flex items-center gap-3 bg-[#3B82F6] text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-[#2563EB] transition"
          >
            Get all 150+ frameworks
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="text-gray-500 text-sm mt-8">
            ✓ Instant download  •  ✓ Works with all AI agents  •  ✓ No subscription
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 slashworks. Frameworks you run, not read.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/skills" className="hover:text-gray-300">Browse all</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
