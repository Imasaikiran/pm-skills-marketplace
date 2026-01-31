import { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Sample Skills | Slashworks',
  description: 'Download 5 free PM framework skills to try before you buy. RICE, User Interviews, and more.',
};

const freeSamples = [
  {
    name: 'RICE Framework',
    category: 'Prioritization',
    description: 'Use RICE framework (Reach, Impact, Confidence, Effort) to prioritize features and projects.',
    file: 'rice-framework.md',
    emoji: '⚡',
  },
  {
    name: 'User Interview Guide',
    category: 'Discovery & Research',
    description: 'Conduct effective user interviews using Jobs-to-be-Done and best practices.',
    file: 'user-interviews.md',
    emoji: '🔍',
  },
  {
    name: 'AARRR Pirate Metrics',
    category: 'Metrics & Analytics',
    description: 'Analyze product growth using AARRR framework - Acquisition, Activation, Retention, Revenue, Referral.',
    file: 'aarrr-metrics.md',
    emoji: '📊',
  },
  {
    name: 'AI Evals & Testing',
    category: 'AI PM',
    description: 'Systematically test and evaluate AI model outputs with proper evaluation frameworks.',
    file: 'ai-evals-testing.md',
    emoji: '🤖',
  },
  {
    name: 'Sprint Planning',
    category: 'Agile & Execution',
    description: 'Plan effective sprints with capacity planning, story estimation, and team alignment.',
    file: 'sprint-planning.md',
    emoji: '⚙️',
  },
];

export default function FreeSamplesPage() {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-white">
      {/* Header */}
      <nav className="border-b border-gray-800 py-4 px-6 sticky top-0 bg-[#0E0E11]/95 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">slashworks</Link>
          <div className="flex gap-4 items-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back</Link>
            <Link
              href="/payment"
              className="bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition"
            >
              Get all 150+ for $1 →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Try before you buy.<br />
            5 free frameworks.
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Download these 5 popular frameworks for free. No email required. Experience the quality before getting all 150+.
          </p>
        </div>
      </section>

      {/* Free Skills */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">5 Free Framework Downloads</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {freeSamples.map((skill) => (
              <div
                key={skill.file}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-[#3B82F6] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.emoji}</span>
                    <div>
                      <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-500">{skill.category}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{skill.description}</p>

                <a
                  href={`/api/download-free?skill=${skill.file}`}
                  download
                  className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Free
                </a>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/20 border-2 border-[#3B82F6] rounded-xl p-8 flex flex-col justify-center items-center text-center md:col-span-2">
              <h3 className="text-2xl font-bold mb-3 text-white">Like what you see?</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Get access to all 150+ frameworks for just $1. One-time payment. Lifetime access.
              </p>
              <Link
                href="/payment"
                className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#2563EB] transition"
              >
                Get all 150+ for $1
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">How to use these skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-semibold mb-2 text-white">Download skills</h3>
              <p className="text-sm text-gray-400">
                Click "Download Free" on any skill above. Each is a markdown file.
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-semibold mb-2 text-white">Add to your AI tool</h3>
              <div className="text-sm text-gray-400 leading-relaxed">
                <p>Claude Code:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E] mt-1">~/.claude/skills/</code>
                <p className="mt-2">Cursor:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E] mt-1">~/.cursor/skills/</code>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-semibold mb-2 text-white">Use with /command</h3>
              <div className="bg-black/50 border border-gray-800 p-3 rounded text-xs font-mono space-y-1 text-[#3B82F6] mt-3">
                <div>/rice-framework</div>
                <div>/user-interviews</div>
                <div>/ai-evals-testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-white">Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2 text-white">Do I need to pay for these 5 skills?</h3>
              <p className="text-gray-400 text-sm">
                Nope! These 5 frameworks are completely free. No email required. Just download and use.
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2 text-white">What's in the full $1 package?</h3>
              <p className="text-gray-400 text-sm">
                150+ frameworks across 13 categories: AI PM, Discovery, Strategy, UX, Metrics, Agile, and more. Every framework includes guides, templates, examples, and best practices.
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2 text-white">Can I use these commercially?</h3>
              <p className="text-gray-400 text-sm">
                Yes! Once you download (free or paid), use them however you want. Build products, ship features, make decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for all 150+?
          </h2>

          <p className="text-xl text-gray-400 mb-10">
            $1 one-time. Lifetime access. No subscription. New frameworks added regularly.
          </p>

          <Link
            href="/payment"
            className="inline-flex items-center gap-3 bg-[#3B82F6] text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-[#2563EB] transition"
          >
            Get all 150+ frameworks for $1
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="text-gray-500 text-sm mt-8">
            ✓ Instant download  •  ✓ Works with all AI agents  •  ✓ Lifetime updates
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 slashworks. Frameworks you run, not read.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/skills" className="hover:text-gray-300">Browse all</Link>
            <Link href="/free-samples" className="hover:text-gray-300">Free samples</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
