'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Download, Star, Sparkles } from 'lucide-react';

type Skill = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  level: string;
  downloads: number;
  rating: number;
  premium: boolean;
};

type Category = {
  name: string;
  skill_count: number;
};

const categoryEmojis: Record<string, string> = {
  'Discovery & Research': '🔍',
  'AI PM': '🤖',
  'Strategy & Vision': '🎯',
  'Prioritization': '⚡',
  'Roadmapping': '🗺️',
  'Metrics & Analytics': '📊',
  'UX & Design': '🎨',
  'Stakeholder Management': '🤝',
  'Agile & Execution': '⚙️',
  'Go-to-Market': '🚀',
  'Technical Collaboration': '💻',
  'Customer Success': '💚',
  'Career & Leadership': '👑',
};

const levelEmojis: Record<string, string> = {
  'Beginner': '🌱',
  'Intermediate': '📈',
  'Advanced': '🔥',
};

export default function SkillsPage({ skills, categories }: { skills: Skill[], categories: Category[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || skill.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [skills, searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4 px-6 sticky top-0 bg-[#0E0E11]/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">slashworks</Link>
          <div className="flex gap-4 items-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back</Link>
            <Link
              href="/payment"
              className="bg-[#3B82F6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563EB] transition"
            >
              Get for $1 →
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All 150+ frameworks</h1>
          <p className="text-gray-400">{skills.length} proven frameworks as slash commands</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search frameworks... (e.g., 'RICE', 'user interviews', 'AI evals')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-[#3B82F6] text-white placeholder-gray-500 text-base"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-3 text-gray-400">Filter by category:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
              }`}
            >
              ✨ All
            </button>
            {categories.sort((a, b) => b.skill_count - a.skill_count).map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                {categoryEmojis[cat.name]} {cat.name} ({cat.skill_count})
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-8">
          <p className="text-sm font-medium mb-3 text-gray-400">Filter by level:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedLevel === 'all'
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
              }`}
            >
              All Levels
            </button>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                {levelEmojis[level]} {level}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            {filteredSkills.length === skills.length
              ? `Showing all ${skills.length} frameworks`
              : `Found ${filteredSkills.length} of ${skills.length} frameworks`
            }
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-[#3B82F6] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs rounded-full font-medium">
                  {categoryEmojis[skill.category]} {skill.category}
                </span>
                <span className="text-xs text-gray-500">
                  {levelEmojis[skill.level]} {skill.level}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-2 text-white">{skill.name}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{skill.description}</p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  {(skill.downloads / 1000).toFixed(1)}K
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  {skill.rating.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2 text-white">No frameworks found</h3>
            <p className="text-gray-400 mb-6">Try different search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm font-medium hover:bg-[#2563EB]"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2 text-white">Get all {skills.length} frameworks for $1</h2>
          <p className="text-gray-400 mb-6">One-time payment. Lifetime access. No subscription.</p>
          <Link
            href="/payment"
            className="inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2563EB]"
          >
            Get for $1 →
          </Link>
        </div>
      </div>

      {/* How to Use Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">How it works</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="font-semibold mb-2 text-white">Pay $1 → Download</h3>
              <p className="text-sm text-gray-400">
                Instant email with ZIP file. All 150+ frameworks. One-time payment.
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="font-semibold mb-2 text-white">Copy to skills folder</h3>
              <div className="text-sm text-gray-400 leading-relaxed space-y-2">
                <p>Claude Code:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E]">~/.claude/skills/</code>
                <p className="mt-2">Cursor:</p>
                <code className="block bg-black/50 border border-gray-800 p-2 rounded text-xs text-[#22C55E]">~/.cursor/skills/</code>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="font-semibold mb-2 text-white">Use with /command</h3>
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

            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#3B82F6] text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="font-semibold mb-2 text-white">Works everywhere</h3>
              <p className="text-sm text-gray-400">
                Use in Claude Code, Cursor, any AI agent that supports skills/commands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
